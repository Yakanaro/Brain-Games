// eslint-disable-next-line import/prefer-default-export
/* eslint-disable no-unused-vars */
import readlineSync, { question } from 'readline-sync';

const roundsCount = 3;

const startGame = (ruleGame, checkGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(ruleGame);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [questionAsk, correctAnswer] = checkGame();
    console.log(`Question: ${questionAsk}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
