'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (x1, x2) => (x1 + x2) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i += 1) {
    result.push(average(square(i), cube(i)));
  }
  return result;
};

module.exports = { square, cube, average, calculate };
