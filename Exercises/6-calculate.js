'use strict';

const square = x => Math.pow(x,2);

const cube = x => {
  return (Math.pow(x,3));
};

const average = (a, b) => {
  return ((a+b)/2);
};

const calculate = () => {
  Array = [];
  for (let a = 0; a <= 9; a++) {
    Array.push(average(square(a), cube(a)));
  }
  return Array;
};

module.exports = { square, cube, average, calculate };
