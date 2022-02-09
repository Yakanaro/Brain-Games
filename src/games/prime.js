#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import { getRandomNumber, name } from '../index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// eslint-disable-next-line import/prefer-default-export
export const prime = () => {
  for (let i = 1; i <= 3; i += 1) {
    const num = getRandomNumber(1, 100);
    let flag = true;

    for (let k = 2; k < num; k += 1) {
      if (num % k === 0) {
        flag = false;
        break;
      }
    }

    console.log(`Question : ${num}`);
    const askAnswer = readlineSync.question('Your answer: ');

    let trueAnswer;
    if (flag === true) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }

    if (askAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
