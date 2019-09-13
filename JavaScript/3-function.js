'use strict';

const average = (a, b) => ((a + b)/2);
const square = (x) => x**2;
const cube = (x) => x**3;

for (let i = 0; i < 10; i++) {
console.log(`${i}: ` + average(square(i), cube(i)));
}