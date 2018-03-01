"use strict";

const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  const setNumberOfPlayers = (id) => {
    if (id === "1-player") {
      return 1
    } else {
      return 2;
    }
  };

  const reset = () => {
    // TODO
  };

  const start = (difficulty) => {
    // TODO
  };

  return { board, setNumberOfPlayers, reset, start };
})();

  };

