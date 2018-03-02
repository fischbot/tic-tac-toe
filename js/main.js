"use strict";

const game = (() => {
  let board = [
                0,0,0,
                0,0,0,
                0,0,0
              ];
  let isTwoPlayers = false;
  let difficulty = 0;
  let players = [];

  const setNumberOfPlayers = (id) => {
    // if (id === "1-player") {
    //   return false;
    // } else {
      isTwoPlayers = true;
    //   return true;
    // }
  };

  const setDifficulty = (id) => {
    // 0 = normal, 1 = hard
    if (id === 'hard') {
      difficulty = 1;
    }
  };

  const reset = () => {
    // TODO
    isTwoPlayers = false;
    difficulty = 0;
    // TODO toggle visibility
  };

  const init = (inputs) => {
    let names = inputs.filter((input) => input.value !== '');
    console.log(names);
    // names.forEach((name, index) => {
    //   // if (input.value !== '') {
    //     game.createPlayer(input.value, index);
    //   // }
    // });

    if (players.length === 1) {
      // create computer player
      players.push(computerPlayer());
      toggle.visibility("difficulty-select"); // show

    } else {
      start();
    }

  };

  const start = () => {
    toggle.visibility("info");
    toggle.visibility("board");
  };

  const createPlayer = (name, index) => {
    let p = player(name, index);
    players.push(p);
  }

  const debug = () => {
    console.log('isTwoPlayers: ' + isTwoPlayers + '\n' +
                'difficulty: ' + difficulty + '\n');
                players.forEach((player) => {
                  console.log(player.name);
                  console.log(player.playerMark);
                });
  }

  return { board, setNumberOfPlayers, reset, setDifficulty, start, init, debug, createPlayer };
})();

// ==================== Player ================================================
const player = (name, index) => {
  let marks = ['X', 'O'];
  let score = 0;
  let playerMark = marks[index];

  return { name, score, playerMark };
};

// ==================== Computer Player =======================================
const computerPlayer = () => {
  // TODO difficulty level
  // TODO logic for each difficulty level
  const name = "CPU";
  const playerMark = 'O';

  return { name, playerMark };
}

// ==================== AI ====================================================
const ai = () => {
  const randomizer = (multiplier) => {
    return Math.floor(Math.random() * multiplier);
  };

  const difficulty = () => {
    // TODO
  };
};

// ==================== HANDLERS =============================================
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
        let inputs = elements.inputs;
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
      // TODO
      console.log(`tile #${elementClicked.id}`);
    } else if (elementClicked.classList.contains("debug")) {
      game.debug();
    }
  };
  const display = {};

  return { clickHandler, display };
})();


const toggle = (() => {
  const visibility = (id) => {
    const element = document.getElementById(`${id}`);
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }

  return { visibility };
})();

const elements = (() => {
  // const btns = document.querySelectorAll("button");
  // const tiles = document.querySelectorAll('.tile');
  const inputs = document.querySelectorAll("input");
  return { inputs };
})();

window.addEventListener("load", function() {
  document.addEventListener("click", handlers.clickHandler, false );
});
