'use strict';

const square = a => a * a;

const cube = a => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    array.push(average(square(i), cube(i)));
  }
  return array;
};


module.exports = { square, cube, average, calculate };
