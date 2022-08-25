'use strict';

const square = (x) => Math.pow(x, 2);

const cube = (x) => Math.pow(x, 3);

const average = (a, b) => (a + b) / 2;

const calculate = () => {

  let array = [];

  for (let i = 0; i < 9; i++) {
    square(i);
    cube(i);
    let sum = average(square(i), cube(i));
    array[i] = sum;

  }
  return array;
};

calculate();

module.exports = { square, cube, average, calculate };
