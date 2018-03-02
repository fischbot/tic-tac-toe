"use strict";

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
