const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  let players = [];
  let turn = 0;
  let settings = {
    difficulty : 0,
    numOfPlayers : 1
  };


  const checkForWin = () => {
    // TODO
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

  const render = (tileClicked) => {
    board[tileClicked] = players[turn].playerMark;
    updateTurn();
  };

  const reset = () => {
    // TODO
    isTwoPlayers = false;
    difficulty = 0;
    // TODO toggle visibility
  };

  const start = () => {
    toggle.visibility("info");
    toggle.visibility("board");
    render();
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

  return { reset, start, init, debug, createPlayer, render, settings };
})();
