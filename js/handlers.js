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
      case "name-input-submit-btn" :
        let inputs = Array.prototype.slice.call(elements.retrieve("input")); // convert from nodelist to array
        console.log(inputs);
        game.init(inputs);
        break;
      case "normal" :
      case "hard" :
        game.setDifficulty();
        game.start();
        break;
    }

    if (elementClicked.classList.contains("tile")) {
      console.log(`tile #${elementClicked.id}`);
      game.render(elementClicked.id);

    } else if (elementClicked.classList.contains("debug")) {
      game.debug();
    }
  };
  const display = {};

  return { clickHandler, display };
})();
