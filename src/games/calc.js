/* eslint-disable no-unused-vars */

import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'What is the result of the expression?';

const calculateGame = (a, b, randomOperation) => {
  let result;
  if (randomOperation === '+') {
    result = a + b;
  }
  if (randomOperation === '-') {
    result = a - b;
  }
  if (randomOperation === '*') {
    result = a * b;
  }
  return result;
};
const roundGame = () => {
  const operators = ['+', '-', '*'];
  const randomOperation = operators[Math.floor(Math.random() * operators.length)];
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const questionAsk = `${a} ${randomOperation} ${b}`;
  const correctAnswer = calculateGame(a, b, randomOperation).toString();
  return [questionAsk, correctAnswer];
};

// eslint-disable-next-line import/prefer-default-export
const calcGame = () => startGame(ruleGame, roundGame);
export default calcGame;
