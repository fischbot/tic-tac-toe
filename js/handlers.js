"use strict";

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
        elements.toggle.visibility("player-select");   // hide
        elements.toggle.visibility("name-input");      // show
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
          elements.toggle.visibility("name-input");      // hide
        }
        break;
      case "reset-btn" :
        game.reset();
        break

      case "play-again-btn" :
        game.nextRound();
        elements.toggle.visibility("game-over");
        break;
    }

    // ===== Tiles ===================================================
    if (elementClicked.classList.contains("tile")) {
      if (!gameboard.isSpaceTaken(elementClicked)) {
        game.update(elementClicked);
        elementClicked.classList.add("space-taken");
      }
    }
  };

  return { clickHandler };
})();
