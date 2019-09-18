'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  for (let number = start; number <= end; number++) {
    if (number % 2) array.push(number);
  }
  return array;
};

module.exports = { rangeOdd };
