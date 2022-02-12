/* eslint-disable no-unused-vars */

import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getDivisor = (num1, num2) => {
  let n1 = num1;
  let n2 = num2;
  if (n1 % n2 === 0) {
    return n2;
  }
  while (n2 !== 0) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
};
const roundGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2} `;
  const correctAnswer = getDivisor(num1, num2).toString();
  return [question, correctAnswer];
};
const gcdGame = () => startGame(ruleGame, roundGame);
export default gcdGame;
