'use strict';
const average = (a, b) => (a + b) / 2;

console.log(average(10, 30));

const square = a => Math.pow(a, 2);

console.log(square(2));

const cube = a => Math.pow(a, 3);

console.log(cube(2));


for (let i = 0; i < 3; i++) {
    console.log(average(square(2), cube(2)));
}
