const handlers = (() => {
  const clickHandler = (e) => {
    const elementClicked = e.target;
    switch (elementClicked.id) {
      // ===== Player Select Buttons =================================
      case "two-players" :
        game.settings.numOfPlayers = 2;
        game.settings.isTwoPlayers = true;
      case "one-player" :
        display.nameInputs(game.settings.numOfPlayers);
        toggle.visibility("player-select");   // hide
        toggle.visibility("name-input");      // show
        break;
      // ===== Name Input Buttons ====================================
      case "name-input-submit-btn" :
        let inputs = Array.prototype.slice.call(document.querySelectorAll("input")); // convert from nodelist to array
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
          game.playerSetup(inputs);
          toggle.visibility("name-input");      // hide
        }
        break;
      case "reset-btn" :
        game.reset();
        break

      case "play-again-btn" :
        game.nextRound();
        toggle.visibility("game-over");
        break;
    }

    // ===== Tiles ===================================================
    if (elementClicked.classList.contains("tile")) {
      if (!gameboard.isSpaceTaken(elementClicked)) {
        game.update(elementClicked);
        elementClicked.classList.add("space-taken");
      }
    } else if (elementClicked.classList.contains("debug")) {
      game.debug();
    }
  };

  return { clickHandler };
})();
