'use strict';

const square = (x) => x*x;

const cube = (x) =>x*x*x;

const average = (a,b) => (a+b)/2;

const calculate = () => {
    let b=[];
    for(let i=0; i<=9; ++i)
        b[i]=average(square(i),cube(i));
    return b;
};

module.exports = { square, cube, average, calculate };
