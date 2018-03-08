// ==================== AI ====================================================
// TODO
const ai = (() => {
  let emptyTiles = [];
  const findEmptySpaces = () => {
    emptyTiles = []; // reset
    game.board.forEach((tile, index) => {
      if (tile === 0) emptyTiles.push(index);
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
    let tilesOccupiedByCpu = [];

    game.board.forEach((tile, index) => {
      if (tile === "O") {
        tilesOccupiedByCpu.push(index);
      }
    });

    return tilesOccupiedByCpu;
  };

  const findPossibleMoveLocations = () => {
    // choose next space based on where previous "O"s were placed
    findEmptySpaces();
    let tilesOccupiedByCpu = getTilesOccupiedByCpu();
    let possibleMoves = [];
    if (tilesOccupiedByCpu.length !== 0) {
      tilesOccupiedByCpu.forEach((tile) => {
        // check empty Tiles that are next to each "O"
        runChecks(possibleMoves, tile);

        // if (possibleMoves.length !== 0) {
          console.log("returning possibleMoves");
          return removeDuplicatePossibilities(possibleMoves);
        // }
      });
    } else {
      console.log("returning emptyTiles");
      return emptyTiles;
    }

  };

  const removeDuplicatePossibilities = (a) => {
    // https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    var seen = {};
    let filtered = a.filter(function(item) {
     return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });

    return filtered;
  };

  const runChecks = (possibleMoves, tile) => {
    checkLeft(possibleMoves, tile);
    checkRight(possibleMoves, tile);
    checkUp(possibleMoves, tile);
    checkDown(possibleMoves, tile);
    checkUpDiagonal(possibleMoves, tile);
    checkDownDiagonal(possibleMoves, tile);
  };



  const update = () => {
    let possibleMoveLocations = [];
    possibleMoveLocations = findPossibleMoveLocations();
    let index;

    while (!possibleMoveLocations.includes(index)) {
      index = randomizer(game.board.length);
    }

    let tile = document.getElementById(`${index}`);
    game.board[index] = game.players[1].playerMark;
    elements.setText(tile, game.players[1].playerMark);
  };

  const difficulty = () => {
    // TODO
  };

  return { update, findPossibleMoveLocations };
})();
