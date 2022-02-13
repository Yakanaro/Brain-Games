import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'What is the result of the expression?';

const calculateGame = (a, b, randomOperation) => {
  switch (randomOperation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const operators = ['+', '-', '*'];

const checkGame = () => {
  const randomOperation = operators[getRandomNumber(0, operators.length)];
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const questionAsk = `${a} ${randomOperation} ${b}`;
  const correctAnswer = String(calculateGame(a, b, randomOperation));
  return [questionAsk, correctAnswer];
};

const calcGame = () => startGame(ruleGame, checkGame);
export default calcGame;
