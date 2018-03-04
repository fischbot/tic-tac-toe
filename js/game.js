const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  let players = [];
  let turn = 0;
  let settings = {
    difficulty : 1, // 1 = normal, 3 = hard TODO use as multiplier for AI randomizer
    numOfPlayers : 1
  };

  const checkForWin = () => { // TODO refactor
    let boardStartAndEndPoints = [
      [0,2],[3,5],[6,8],[0,6,3],[1,7,3],[2,8,3],[0,8,4],[2,6,2]
    ];
    let isRoundOver = false;
    let total = 0;
    while (!isRoundOver) {
      boardStartAndEndPoints.forEach((set) => {
        if (set.length === 2) {
          // check horizontal
          for (let i = set[0], end = set[1]; i <= end; i++) {
            if (board[i] === 'X') {
              total += 1;
            } else if (board[i] === 'O') {
              total += 100;
            }
          }
        } else {
          // check vertical and diagonal
          let addTiles = set[2];
          for (let i = set[0], end = set[1]; i <= end; i += addTiles) {
            if (board[i] === 'X') {
              total += 1;
            }

            if (board[i] === 'O') {
              total += 100;
            }
          }
        }

        // Check for win
        if (total === 3 || total === 300) {
          gameOver(players[turn]);
          isRoundOver = true;
        } else {
          total = 0;
        }
      }); // end forEach
      isRoundOver = true;
    } // end while
  };

  const createPlayer = (name, index) => {
    let p = player(name, index);
    players.push(p);
  }

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
      // TODO checkForWin
      updateTurn();
    }

  };

  const reset = () => {
    // TODO
    // isTwoPlayers = false;
    difficulty = 0;
    // TODO toggle visibility
  };

  const start = () => {
    toggle.visibility("info");
    toggle.visibility("board");
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
