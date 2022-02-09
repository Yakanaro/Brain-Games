#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import { getRandomNumber, name } from '../index.js';

const calculateGame = () => {
  for (let i = 1; i <= 3; i += 1) {
    const operators = ['+', '-', '*'];
    const randomOperation = operators[Math.floor(Math.random() * operators.length)];
    const a = getRandomNumber(0, 100);
    const b = getRandomNumber(0, 100);
    let result;

    console.log('What is the result of the expression?');

    const tryCalc = `${a} ${randomOperation} ${b}`;
    console.log(tryCalc);

    const askAnswer = readlineSync.question('Your answer: ');

    if (randomOperation === '+') {
      result = `${a + b}`;
    }
    if (randomOperation === '-') {
      result = `${a - b}`;
    }
    if (randomOperation === '*') {
      result = `${a * b}`;
    }
    if (askAnswer === result) {
      console.log('Correct');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations,! ${name}`);
};
export default calculateGame;
