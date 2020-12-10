'use strict';

const square = n => n * n;

const cube = n => n ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const res = [];

  for (let i = 0; i < 10; i += 1) {
    res.push(average(square(i), cube(i)));
  }

  return res;
};

module.exports = { square, cube, average, calculate };
