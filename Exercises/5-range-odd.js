'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
