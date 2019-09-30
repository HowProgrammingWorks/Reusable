'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (...arg) => arg.reduce((acc, cur) => acc + cur) / arg.length;

const calculate = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(average(square(i), cube(i)));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
