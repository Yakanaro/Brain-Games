/* eslint-disable no-unused-vars */

import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// eslint-disable-next-line import/prefer-default-export
const prime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};
const roundGame = () => {
  const num = getRandomNumber(0, 100);
  const question = num;
  const endPrime = prime(num);
  const correctAnswer = endPrime ? 'yes' : 'no';
  return [question, correctAnswer];
};
const primeGame = () => startGame(ruleGame, roundGame);
export default primeGame;
