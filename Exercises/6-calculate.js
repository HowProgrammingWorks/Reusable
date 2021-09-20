'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = (start = 0, end = 9) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(average(square(i), cube(i)));
  }
  return array;
};


module.exports = { square, cube, average, calculate };
