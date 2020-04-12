'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => ((a + b) / 2);


const calculate = () => {
  const array = [];
  for (let x = 0; x <= 9; x++) {
    const result = average(square(x), cube(x));
    array.push(result);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
