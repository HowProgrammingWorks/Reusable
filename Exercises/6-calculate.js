'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const aveResult = average(cube(i), square(i));
    result.push(aveResult);
  }

  return result;
};


module.exports = { square, cube, average, calculate };
