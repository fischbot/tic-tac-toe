"use strict";

const game = (() => {
  let players = [];
  let turn = 0;
  let isWon = false;
  let isTied = false;
  let settings = {
    isTwoPlayers : false,
    numOfPlayers : 1
  };

  const checkForWin = () => {
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],
                           [2,5,8],[0,4,8],[2,4,6]];
    winConditions.forEach((set, index) => {
      let total = 0;
      set.forEach((tile) => {
        if (gameboard.board[tile] === "X") {
          total += 1;
        } else if (gameboard.board[tile] === "O") {
          total += 100
        }
      });
      if (total === 3 || total === 300) {
        isWon = true;
        gameOver(`${players[turn].name} wins!`);
      }
    });
  };

  const checkForTie = () => {
    let tileCount = 0;
    gameboard.board.forEach( (tile) => {
      if (tile === 0) {
        return
      } else {
        tileCount++;
      }
    });
    if (tileCount === 9 && !isWon) {
      // all spaces are taken
      gameOver(`It's a tie!`);
      turn = 0; // first player goes after a tie
      isTied = true;
    }

  };

  const createPlayer = (name, index) => {
    let p = player(name, index);
    players.push(p);
  }

  const updateWinnerScore = () => {
    players[turn].score++;
    display.updateScores();
  };

  const gameOver = (msg) => {
    elements.toggle.visibility("overlay");             // show
    elements.toggle.visibility("game-over");           // show
    elements.toggle.visibility("player-turn-message"); // hide
    display.winnerMessage(msg);
    if (isWon) updateWinnerScore();
  };

  const getPlayers = () => {
    return players;
  };

  const playerSetup = (inputs) => {
    // set up players
    inputs.forEach((name, index) => createPlayer(name.value, index));

    if (players.length === 1) {
      createPlayer("CPU", 1);
    }
    start();
  };

  const runAfterTurnChecksAndUpdateTurnMessage = () => {
    let spacesTaken = gameboard.tallySpacesTaken();

    if (spacesTaken >= 3) {
      checkForWin();
    }

    if (!isWon && spacesTaken === 9) {
      checkForTie();
    }

    if (!isTied) {
      updateTurn();
    }
    display.playerTurnMessage(players[turn].name);
  };

  const update = (tileClicked) => {

    if (gameboard.board[tileClicked.id] === 0) {
      gameboard.board[tileClicked.id] = players[turn].playerMark;
      elements.setText(tileClicked, players[turn].playerMark);

      runAfterTurnChecksAndUpdateTurnMessage();
    }

    if (!isWon && !isTied && !settings.isTwoPlayers && turn === 1) {
      computerTurn();
    }
  };

  const computerTurn = () => {
    window.setTimeout(() => {
      ai.update();
      runAfterTurnChecksAndUpdateTurnMessage();

      elements.toggle.visibility("disable-click"); // hide
    }, 600);
    elements.toggle.visibility("disable-click"); // show
  }

  const reset = () => {
    settings.isTwoPlayers = false;
    settings.numOfPlayers = 1;
    players = [];
    turn = 0;
    isWon = false;
    isTied = false;
    gameboard.board.fill(0);
    elements.toggle.visibility("player-select"); // show
    elements.toggle.visibility("board"); // hide
    elements.toggle.visibility("right-side-content"); // hide
    elements.toggle.visibility("player-turn-message"); // hide
  };

  const nextRound = () => {
    elements.toggle.visibility("overlay"); // hide
    elements.toggle.visibility("player-turn-message"); // show
    isWon = false;
    isTied = false;
    display.clearBoard();
    gameboard.board.fill(0);
    if (!settings.isTwoPlayers && turn === 1) {
      computerTurn();
    }

    display.playerTurnMessage(players[turn].name);
  };

  const start = () => {
    elements.toggle.visibility("board");               // show
    elements.toggle.visibility("right-side-content");  // show
    elements.toggle.visibility("player-turn-message"); // show
    display.initializeScoreboard();
    display.playerTurnMessage(players[turn].name);
  };

  const updateTurn = () => {
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
  };

  return {
          reset,
          playerSetup,
          update,
          settings,
          getPlayers,
          nextRound,
          players,
        };
})();
