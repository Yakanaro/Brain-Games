import startGame from '../index.js';
import getRandomNumber from '../randomNumb.js';

const ruleGame = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateGame = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const checkGame = () => {
  const operation = operators[getRandomNumber(0, operators.length - 1)];
  const a = getRandomNumber(0, 100);
  const b = getRandomNumber(0, 100);
  const questionAsk = `${a} ${operation} ${b}`;
  const correctAnswer = String(calculateGame(a, b, operation));
  return [questionAsk, correctAnswer];
};

const calcGame = () => startGame(ruleGame, checkGame);
export default calcGame;
