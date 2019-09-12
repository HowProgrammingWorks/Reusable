'use strict';

const average = (a, b) => ((a + b) / 2);

const square = x => Math.pow(x, 2);

const cube = x => Math.pow(x, 3);

for (let i = 1; i < 10; i++) {
  console.log(`${i}: ` + average(square(i), cube(i)));
}
