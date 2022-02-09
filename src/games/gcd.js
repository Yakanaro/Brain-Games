#!/usr/bin/env node
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import { getRandomNumber, name } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const comDivisor = () => {
  for (let i = 1; i <= 3; i += 1) {
    const a = getRandomNumber(0, 100);
    const b = getRandomNumber(0, 100);

    console.log('Find the greatest common divisor of given numbers.');

    console.log(`Question: ${a} ${b}`);

    const askAnswer = readlineSync.question('Your answer: ');

    const getDivisor = (num1, num2) => {
      let n1 = num1;
      let n2 = num2;
      if (n1 % n2 === 0) {
        return n2;
      }
      while (n2 !== 0) {
        if (n1 > n2) {
          n1 -= n2;
        } else {
          n2 -= n1;
        }
      }
      return n1;
    };

    const result = String(getDivisor(a, b));
    if (result === askAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations,! ${name}`);
};
