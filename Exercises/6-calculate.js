'use strict';

const square = (x) => {
    return x * x;
};

const cube = (x) => {
    return x * x * x;
};

const average = (a, b) => {
    return (a + b) / 2;
};

const calculate = () => {
    const results = [];
    for (let i = 0; i <= 9; i++) {
        results.push(average(square(i), cube(i)));
    }
    return results;
};

module.exports = { square, cube, average, calculate };
