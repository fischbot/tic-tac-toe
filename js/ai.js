// ==================== AI ====================================================
// TODO
const ai = (() => {
  let emptyTiles = [];
  let tilesOccupiedByCpu = [];
  const findEmptySpaces = () => {
    emptyTiles = [];
    game.board.forEach((tile, index) => {
      if (tile === 0) {
        emptyTiles.push(index);
      }
    });
  };

  const checkLeft = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile - 1)) {
      possibleMoves.push(tile - 1);
    }
  };

  const checkRight = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile + 1)) {
      possibleMoves.push(tile + 1);
    }
  };

  const checkUp = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile - 3)) {tile
      possibleMoves.push(tile - 3);
    }
  }

  const checkDown = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile + 3)) {
      possibleMoves.push(tile + 3);
    }
  }

  const checkUpDiagonal = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile - 4)) {
      possibleMoves.push(tile - 4);
    }
  }

  const checkDownDiagonal = (possibleMoves, tile) => {
    if (emptyTiles.includes(tile + 4)) {
      possibleMoves.push(tile + 4);
    }
  }

  const randomizer = (multiplier) => {
    return Math.floor(Math.random() * multiplier);
  };

  const getTilesOccupiedByCpu = () => {
    if (tilesOccupiedByCpu.length !== 0) {
      // clear values
      tilesOccupiedByCpu = [];
    }

    game.board.forEach((tile, index) => {
      if (tile === "O") {
        tilesOccupiedByCpu.push(index);
      }
    });
  };

  const findPossibleMoveLocations = () => {
    getTilesOccupiedByCpu();
    let move = {};
    let possibleMoves = [];
    if (tilesOccupiedByCpu.length !== 0) {
      tilesOccupiedByCpu.forEach((tile) => {
        // check empty Tiles that are next to each "O"
        runChecks(possibleMoves, tile);
      });




    // tilesOccupiedByCpu.forEach((occupiedByCpu, occupiedIndex) => {
    //   if (occupiedByCpu) {
    //
    //   }
    // });
    // console.log(tilesOccupiedByCpu);
  };

  const update = () => {
    findEmptySpaces();
    let index;
    while (!emptyTiles.includes(index)) {
      index = randomizer(game.board.length);
    }
    let tile = document.getElementById(`${index}`);
    game.board[index] = game.players[1].playerMark;
    elements.setText(tile, game.players[1].playerMark);
  };

  const difficulty = () => {
    // TODO
  };

  return { update };
})();
