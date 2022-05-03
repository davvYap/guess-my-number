'use strict';

// To define the random number
let secretNum = Math.trunc(Math.random() * 20) + 1; // need to add 1 behind because the range is from 0 ~ 19, not included 20

let score = 20;

// reset the color of number input & message font size
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').style.backgroundColor = '#222';
  document.querySelector('.message').style.fontSize = '2rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);
  console.log(guessNum, typeof guessNum);

  if (!guessNum && score > 1) {
    // if no input, meaning will return 0 value, which is falsy value!
    document.querySelector('.message').textContent = '⛔No number is input!';
    document.querySelector('.message').style.fontSize = '2.5rem';
    document.querySelector('.guess').style.backgroundColor = '#ff3333';

    // when player wins
  } else if (guessNum === secretNum && score > 1) {
    document.querySelector('.message').textContent =
      '🎊You had guess the correct number!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.fontSize = '8rem';
    document.querySelector('.number').style.width = '30rem';

    // when the number is greater than secret number
  } else if (
    guessNum > secretNum &&
    score > 1 &&
    guessNum <= 20 &&
    guessNum >= 1
  ) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬆️Too high!';

    // when the number is lower than secret number
  } else if (
    guessNum < secretNum &&
    score > 1 &&
    guessNum <= 20 &&
    guessNum >= 1
  ) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '⬇️Too low!';

    // when guess number out of range
  } else if (guessNum < 1 || guessNum > 20) {
    document.querySelector('.message').textContent =
      'Number in between 1 to 20 ❗❗❗';

    // when out of chance
  } else {
    score--;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = '👾You lose the game.';
    document.querySelector('.message').style.fontSize = '2.5rem';
    document.querySelector('.header').textContent = 'You lose !!!';
  }
});

// AGAIN button configuration
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '🤔 Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
