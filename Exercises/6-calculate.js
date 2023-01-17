'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (x, y) => (x + y) / 2;

const MAX_LENGTH = 9;

const calculate = () => {
  const array = [];
  for (let index = 0; index <= MAX_LENGTH; index++) {
    const avg = average(square(index), cube(index));
    array.push(avg);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
