'use strict';

const square = (x) => x ** 2;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const calc = [];

  for (let i = 0; i <= 9; i++) {
    const getCalcResult = average(square(i), cube(i));

    calc.push(getCalcResult);
  }

  return calc;
};

console.log(calculate([0, 1, 6, 18, 40, 75, 126, 196, 288, 405]));

module.exports = { square, cube, average, calculate };
