'use strict';

const square = (a) => a * a;

const cube = (a) => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const avg = average(square(i), cube(i));
    array.push(avg);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
