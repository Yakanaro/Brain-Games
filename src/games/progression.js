import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (progStart, step, length) => {
  const array = [];
  for (let i = 0; i <= length; i += 1) {
    array.push(progStart + i * step);
  }
  return array;
};

const createHiddenIndex = (progression, hiddenIndex) => {
  const newProgression = progression;
  const newHiddenIndex = hiddenIndex;
  newProgression[newHiddenIndex] = '..';
  return newProgression.join(' ');
};

const checkGame = () => {
  const firstNum = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 100);
  const randomLength = getRandomNumber(5, 10);
  const progression = getProgression(firstNum, step, randomLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  const question = createHiddenIndex(progression, hiddenIndex);
  return [question, correctAnswer];
};

const progGame = () => startGame(gameRule, checkGame);
export default progGame;
