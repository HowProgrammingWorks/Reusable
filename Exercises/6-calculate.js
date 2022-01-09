'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = [];
  for (let index = 0; index <= 9; index++) {
    arr.push(average(square(index), cube(index)));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
