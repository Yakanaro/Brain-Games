#!/usr/bin/env node.
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import { getRandomNumber, name } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
console.log('What number is missing in the progression?');

// eslint-disable-next-line import/prefer-default-export
export const getProgression = () => {
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber(1, 100);
    const step = getRandomNumber(2, 100);

    const resultArr = [number];
    for (let k = 1; k <= 9; k += 1) {
      const prog = number + step * k;
      resultArr.push(prog);
    }

    const randomIndex = resultArr[Math.floor(Math.random() * resultArr.length)];
    const string = randomIndex.toString();
    const indexHide = resultArr.indexOf(randomIndex);
    resultArr[indexHide] = '..';
    const stringQuestion = resultArr.join(' ');

    console.log(`Question: ${stringQuestion}`);
    const askAnswer = readlineSync.question('Your answers: ');

    if (string === askAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${askAnswer}' is wrong answer ;(. Correct answer was '${randomIndex}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations,! ${name}`);
};
