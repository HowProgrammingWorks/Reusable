'use strict';

const rangeOdd = (min, max) => {
  const array = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};

module.exports = { rangeOdd };
