import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const checkGame = () => {
  const num = getRandomNumber(0, 100);
  const question = num;
  const correctAnswer = prime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => startGame(gameRule, checkGame);
export default primeGame;
