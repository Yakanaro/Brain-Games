/* eslint-disable no-unused-vars */

import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'What number is missing in the progression?';

const getProgression = (progStart, step, length) => {
  const array = [];
  for (let i = 0; i <= length; i += 1) {
    const result = progStart + i * step;
    array.push(result);
  }
  return array;
};
const roundGame = () => {
  const firstNum = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 100);
  const randLength = getRandomNumber(5, 10);

  const giveProgression = getProgression(firstNum, step, randLength);
  const indexRandom = getRandomNumber(0, giveProgression.length - 1);

  const correctAnswer = `${giveProgression[indexRandom]}`;
  giveProgression[indexRandom] = '..';
  const question = giveProgression.join(' ');
  return [question, correctAnswer];
};
const progGame = () => startGame(ruleGame, roundGame);
export default progGame;
