'use strict';

const rangeOdd = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    if (i % 2) {
      arr = [...arr, i];
    }
  }
  return arr;
};

module.exports = { rangeOdd };
