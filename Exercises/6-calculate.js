'use strict';

const square = x => x * x;

const cube = x => x * x * x;

const average = (a, b) => {
  let sum = 0;
  let i = 0;
  for (a; a < b + 1; a++) {
    sum += a;
    i++;
  }
  return sum / i;
};


const calculate = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = average(square(i), cube(i));
  }
  return arr;
};

module.exports = { calculate };
