'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const MAX_ITERATION = 9;
  const results = [];

  for (let i = 0; i <= MAX_ITERATION; i++) {
    results.push(average(square(i), cube(i)));
  }

  return results;
};

module.exports = { square, cube, average, calculate };
