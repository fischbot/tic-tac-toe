"use strict";

// const game = (() => {
//   let board = [
//                 0,0,0,
//                 0,0,0,
//                 0,0,0
//               ];
//   let isTwoPlayers = false;
//   let difficulty = 0;
//   let players = [];
//   let turn = 0;
//   const setNumberOfPlayers = (id) => {
//     // if (id === "1-player") {
//     //   return false;
//     // } else {
//       isTwoPlayers = true;
//     //   return true;
//     // }
//   };
//
//   const setDifficulty = (id) => {
//     // 0 = normal, 1 = hard
//     if (id === 'hard') {
//       difficulty = 1;
//     }
//   };
//
//   const reset = () => {
//     // TODO
//     isTwoPlayers = false;
//     difficulty = 0;
//     // TODO toggle visibility
//   };
//
//   const init = (inputs) => {
//     // set up players
//     let names = inputs.filter((input) => input.value !== '');
//     names.forEach((name, index) => game.createPlayer(name.value, index));
//
//     if (players.length === 1) {
//       // create computer player
//       players.push(computerPlayer());
//       toggle.visibility("difficulty-select"); // show
//     } else {
//       start();
//     }
//   };
//
//   const start = () => {
//     toggle.visibility("info");
//     toggle.visibility("board");
//     render();
//   };
//
//   const createPlayer = (name, index) => {
//     let p = player(name, index);
//     players.push(p);
//   }
//
//   const render = (tileClicked) => {
//     board[tileClicked] = players[turn].playerMark;
//     updateTurn();
//   };
//
//   const updateTurn = () => {
//     if (turn === 0) {
//       turn = 1;
//     } else {
//       turn = 0;
//     }
//   };
//
//   const checkForWin = () => {
//     // TODO
//   };
//
//   const debug = () => {
//     players.forEach((player, index) => {
//       console.log('player ' + (parseInt([index]) + 1) + ': ' + player.name + ': ' + player.playerMark);
//     });
//     console.table(board);
//   }
//
//   return { setNumberOfPlayers, reset, setDifficulty, start, init, debug, createPlayer, render };
// })();

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

window.addEventListener("load", function() {
  document.addEventListener("click", handlers.clickHandler, false );
});
