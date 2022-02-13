import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getDivisor(num2, num1 % num2);
};

const checkGame = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2} `;
  const correctAnswer = getDivisor(num1, num2).toString();
  return [question, correctAnswer];
};
const gcdGame = () => startGame(ruleGame, checkGame);
export default gcdGame;
