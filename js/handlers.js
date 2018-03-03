const handlers = (() => {
  const clickHandler = (e) => {
    const elementClicked = e.target;
    switch (elementClicked.id) {
      // ===== Player Select Buttons =================================
      case "2-player" :
        game.settings.numOfPlayers = 2;
      case "1-player" :
        display.nameInputs(game.settings.numOfPlayers);
        toggle.visibility("player-select");   // hide
        toggle.visibility("name-input");      // show
        break;
      // ===== Name Input Buttons ====================================
      case "name-input-submit-btn" :
        let inputs = Array.prototype.slice.call(elements.retrieve("input")); // convert from nodelist to array
        let missingCount = 0;
        // check all inputs for values
        inputs.forEach((input, index) => {
          if (elements.isMissingValue(input)) {
            alert ("Enter Player " + (index + 1) + " Name");
            missingCount++;
          }
        });
        if (missingCount === 0) {
          // all inputs have values
          game.init(inputs);
        }
        break;

      // ===== Difficulty Select Buttons =============================
      case "hard" :
        game.settings.difficulty = 3;
      case "normal" :
        game.start();
        break;
    }

    // ===== Tiles ===================================================
    if (elementClicked.classList.contains("tile")) {
      if (!game.isSpaceTaken(elementClicked)) {
        game.render(elementClicked);
        elementClicked.classList.add("space-taken");
      }


    } else if (elementClicked.classList.contains("debug")) {
      game.debug();
    }
  };

  return { clickHandler };
})();
