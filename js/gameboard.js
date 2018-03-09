"use strict";

const gameboard = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];

  const tallySpacesTaken = () => {
    let taken = 0;
    gameboard.board.forEach((tile, index) => {
      if (tile !== 0) {
        taken += 1;
      }
    });
    return taken;
  }

  const isSpaceTaken = (element) => {
    return element.classList.contains("space-taken");
  };
  return { board, tallySpacesTaken, isSpaceTaken };
})();
