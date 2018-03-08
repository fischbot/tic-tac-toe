"use strict";

// ==================== Player ================================================
const player = (name, index) => {
  let marks = ['X', 'O'];
  let score = 0;
  let playerMark = marks[index];
  return { name, score, playerMark };
};

// ==================== Computer Player =======================================
// TODO
const computerPlayer = () => {
  // TODO difficulty level
  // TODO logic for each difficulty level
  const name = "CPU";
  const playerMark = 'O';
  const score = 0;
  return { name, playerMark, score };
}

// ==================== Display ===============================================

const display = (() => {
  const nameInputs = (numOfPlayers) => {
    // create a label and input element for 1 or 2 players
    for (let i = 0; i < numOfPlayers; i++) {
      let input = elements.create("input", ".name");
      let label = elements.create("label", "");
      label.innerText = "Player " + (i + 1) + " Name: ";
      elements.append("#name-input", label);
      elements.append("#name-input", input);
    }
  };

  const initializeScoreboard = () => {
    let players = game.getPlayers();
    players.forEach((player, index) => {
      const playerId = "#p" + (index + 1);
      const name = document.createElement("p");
      const score = document.createElement("p");
      elements.append(playerId, name);
      name.innerText = player.name;
      elements.append(playerId, score);
      score.innerText = player.score;
      score.id = playerId + "-score";
    });
  };

  const updateScores = () => {
    let players = game.getPlayers();
    players.forEach((player, index) => {
      const scoreId = "#p" + (index + 1) + "-score";
      const score = document.getElementById(`${scoreId}`);
      score.innerText = player.score;
    });
  };

  const clearBoard = () => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((tile) => {
      tile.innerText = "";
      if (tile.classList.contains("space-taken")) {
        tile.classList.remove("space-taken");
      }
    });
  };

  const winnerMessage = (msg) => {
    let players = game.getPlayers();
    let p = document.getElementById("winner-message");
    p.innerText = msg;
  };

  const playerTurnMessage = (player) => {
    const name = document.getElementById("player-turn-message");
    name.innerText = (player.toUpperCase() + "'S TURN");
  }

  return { nameInputs, initializeScoreboard, updateScores, winnerMessage, clearBoard, playerTurnMessage };
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

const main = (() => {
    window.addEventListener("load", function() {
      document.addEventListener("click", handlers.clickHandler, false );
    });
})();
