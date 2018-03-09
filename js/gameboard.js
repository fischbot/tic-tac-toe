const gameboard = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];
  const isSpaceTaken = (element) => {
    return element.classList.contains("space-taken");
  };
})();
