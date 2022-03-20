'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const massiv = [];
  for (let i = 0; i <= 9; i++) {
    const znach1 = cube(i);
    const znach2 = square(i);
    massiv.push(average(znach1, znach2));
  }
  return massiv;
};

module.exports = { square, cube, average, calculate };
