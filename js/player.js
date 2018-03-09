"use strict";
const player = (name, index) => {
  let marks = ['X', 'O'];
  let score = 0;
  let playerMark = marks[index];
  return { name, score, playerMark };
};
