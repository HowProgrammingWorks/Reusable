'use strict';

const square = a => a * a;

const cube = a => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    s = square(i);
    c = cube(i);
    arr = [...arr, average(s, c)];
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
