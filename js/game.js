const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  let players = [];
  let turn = 0;
  let isWon = false;
  let settings = {
    difficulty : 1, // 1 = normal, 3 = hard TODO use as multiplier for AI randomizer
    numOfPlayers : 1
  };

  const checkForWin = () => {
    let boardStartAndEndPoints = [
      // index 0 = start location, index 1 = end location,
      // if there is an index 2 = how many tiles to add
      [0,2,1],[3,5,1],[6,8,1],[0,6,3],[1,7,3],[2,8,3],[0,8,4],[2,6,2]
    ];
    let isRoundOver = false;
    let total = 0;
    let xWinTotal = 3;
    let oWinTotal = 300;
    while (!isRoundOver) {
      boardStartAndEndPoints.forEach((set) => {
        let addTiles = set[2];
        for (let i = set[0], end = set[1]; i <= end; i+= addTiles) {
          if (board[i] === 'X') {
            total += 1;
          } else if (board[i] === 'O') {
            total += 100;
          }
        }

        if (total === xWinTotal || total === oWinTotal) {
          isRoundOver = true;
          isWon = true;
          gameOver(`${players[turn].name} wins!`);
        } else {
          total = 0;
        }
      }); // end forEach
      isRoundOver = true;
    } // end while
  };

  const checkForTie = () => {
    let tileCount = 0;
    board.forEach( (tile) => {
      if (tile === 0) {
        return
      } else {
        tileCount++;
      }
    });
    if (tileCount === 9 && !isWon) { // all spaces are taken
      gameOver(`It's a tie!`);
      // run only if all tiles are taken and no one won
    }

  };
  const createPlayer = (name, index) => {
    let p = player(name, index);
    players.push(p);
  }

  const gameOver = (msg) => {
    toggle.visibility("message");   // hide
    toggle.visibility("overlay");   // show
    display.winnerMessage(msg);
    toggle.visibility("game-over"); // show
    players[turn].score++;
    display.updateScores();

  };

  const getPlayers = () => {
    return players;
  };

  const init = (inputs) => {
    // set up players
    inputs.forEach((name, index) => game.createPlayer(name.value, index));

    if (players.length === 1) {
      // create computer player
      players.push(computerPlayer());
      toggle.visibility("difficulty-select"); // show
    } else {
      start();
    }
  };

  const isSpaceTaken = (element) => {
    return element.classList.contains("space-taken");
  };

  const render = (tileClicked) => {
    if (board[tileClicked.id] === 0) {
      board[tileClicked.id] = players[turn].playerMark;
      console.log(tileClicked);
      elements.setText(tileClicked, players[turn].playerMark);
      checkForWin();
      checkForTie();
      updateTurn();
    }

  };

  const reset = () => {
    // TODO
    // isTwoPlayers = false;
    difficulty = 0;
    // TODO toggle visibility
  };

  const nextRound = () => {
    toggle.visibility("overlay"); // hide
    isWon = false;
    display.marksMessage();
    display.clearBoard();
    board = [0,0,0,0,0,0,0,0,0];
  };

  const start = () => {
    toggle.visibility("info");
    toggle.visibility("board");
    display.initializeScoreboard();
  };

  const swapPlayerMarks = () => {
      let temp = players[0].playerMark;
      players[0].playerMark = players[1].playerMark;
      players[1].playerMark = temp;
  };


  const updateTurn = () => {
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
  };

  const debug = () => {
    players.forEach((player, index) => {
      console.log('player ' + (parseInt([index]) + 1) + ': ' + player.name + ': ' + player.playerMark);
    });
    console.table(board);
  }

  return { reset, start, init, debug, createPlayer, render, settings, isSpaceTaken };
})();
