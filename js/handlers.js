const handlers = (() => {
  const clickHandler = (e) => {
    const elementClicked = e.target;
    switch (elementClicked.id) {
      case "2-player" :
        toggle.visibility("player-2-input");
        game.setNumberOfPlayers(elementClicked);
      case "1-player" :
        toggle.visibility("player-select");
        toggle.visibility("name-input");
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
