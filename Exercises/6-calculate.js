'use strict';

const average = (a, b) => (a + b) / 2;

const square = (a) => a * a;

const cube = (a) => a ** 3;

function calculate() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    result[i] = (average(square(i), cube(i)));
  }
  return result;
}

module.exports = { square, cube, average, calculate };
