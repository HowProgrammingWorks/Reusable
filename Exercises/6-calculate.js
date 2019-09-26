'use strict';

const square = a => a * a;

const cube = a => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    const s = square(i);
    const c = cube(i);
    arr.push(average(s, c));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
