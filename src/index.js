// eslint-disable-next-line import/prefer-default-export
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);
