'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];
  for (let i = 0; i <= 9; i++) {
    const av = average(square(i), cube(i));
    arr.push(av);
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
