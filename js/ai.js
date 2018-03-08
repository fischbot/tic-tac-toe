// ==================== AI ====================================================
// TODO
const ai = (() => {
  let tilesOccupiedByCpu = [];
  let possibleMoveLocations = [];
  const findEmptySpaces = () => {
    possibleMoveLocations = [];
    game.board.forEach((tile, index) => {
      if (tile === 0) {
        possibleMoveLocations.push(index);
      }
    });
  };

  const checkLeft = (index) => {
    //if (index === 0 || index === 3 || index === 6) {
    //  return false;
    //}
    return possibleMoveLocations.includes(index-1);
  };

  const checkRight = (index) => {
    return possibleMoveLocations.includes(index+1);
  };

  const checkUp = (index) => {
    return possibleMoveLocations.includes(index-3);
  }

  const checkDown = (index) => {
    return possibleMoveLocations.includes(index+3);
  }

  const checkUpDiagonal = (index) => {
    return possibleMoveLocations.includes(index-4);
  }

  const checkDownDiagonal = (index) => {
    return possibleMoveLocations.includes(index+4);
  }

  const randomizer = (multiplier) => {
    return Math.floor(Math.random() * multiplier);
  };

  const planNextMove = () => {
    getTilesOccupiedByCpu();
    let move = {};
    let possibleMoves = [];
    if (tilesOccupiedByCpu.length !== 0) {
      tilesOccupiedByCpu.forEach((tile) => {
        // check empty Tiles that are next to each "O"
        move.left = checkLeft();
        move.right = checkRight();
        move.up = checkUp();
        move.down = checkDown();
        move.upDiagonal = checkUpDiagonal();
        move.downDiagonal = checkDownDiagonal();

        if (move.left) {
          possibleMoves.push()
        }
      });
    }




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
