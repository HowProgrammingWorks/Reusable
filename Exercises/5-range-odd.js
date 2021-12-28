'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  if (arr.length < 0) return [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
