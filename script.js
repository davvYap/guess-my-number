'use strict';

// To define the random number
const secretNum = Math.trunc(Math.random() * 20) + 1; // need to add 1 behind because the range is from 0 ~ 19, not included 20
document.querySelector('.number').textContent = secretNum;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum, typeof guessNum);

  if (!guessNum && score > 1) {
    // if no input, meaning will return 0 value, which is falsy value!
    document.querySelector('.message').textContent = '⛔No number is input!';
    // document.querySelector('.right'); propose to change the border color to red
  } else if (guessNum === secretNum && score > 1) {
    document.querySelector('.message').textContent =
      '🎊You had guess the correct number!';
  } else if (guessNum > secretNum && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬆️Too high!';
  } else if (guessNum < secretNum && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬇️Too low!';
  } else {
    score--;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '👾You lose the game.';
  }
});
