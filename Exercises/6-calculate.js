'use strict';

const square = (x) => x * x;

const cube = (x) => x ** 3;


const average = (a, b) => {
  return (a + b) / 2;
};
const calculate = (x) => {
  let arr = new Array();
  let a = 0;
  for(let i = 0; i < 10; i++){
    arr[a] = average(square(i), cube(i))
    a++;
  }
 return arr;
};

module.exports = { square, cube, average, calculate };
