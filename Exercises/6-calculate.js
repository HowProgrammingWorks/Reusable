'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const arr = [];

const calculate = () => {
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    arr[i] = average(s, c);
  }
  return arr;
};

calculate(3);

module.exports = { square, cube, average, calculate };
