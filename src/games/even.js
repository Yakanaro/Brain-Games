import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (num) => num % 2 === 0;

const checkGame = () => {
  const num = getRandomNumber(0, 100);
  const question = num;
  const correctAnswer = even(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const evenGame = () => startGame(ruleGame, checkGame);
export default evenGame;
