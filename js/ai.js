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

  const firstMove = () => {
    let index = randomizer(9);
    findEmptySpaces();
    console.log(possibleMoveLocations);
    while (!possibleMoveLocations.includes(index)) {
      index = randomizer(game.board.length);
      // console.log(index);
    }
    render(index); // TODO fix
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

  const update = () => {
    findEmptySpaces();
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

  return { firstMove, render};
})();
