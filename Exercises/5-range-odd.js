'use strict';

const rangeOdd = (start, end) => {
  const length = end - start;

  if (length < 0) return [];
  const arr = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }

  return arr;
};

module.exports = { rangeOdd };
