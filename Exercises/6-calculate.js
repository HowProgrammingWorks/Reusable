'use strict';

const square = a => a * a;

const cube = a => a ** 3;

const average = (a, b) => ((a + b) / 2);

const calculate = () => {
  const averages = [];
  for (let i = 0; i <= 9; i++) {
    averages.push(average(square(i), cube(i)));
  }
  return averages;
};

module.exports = { square, cube, average, calculate };
