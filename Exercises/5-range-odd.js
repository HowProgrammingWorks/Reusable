'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (start; start <= end; start++) {
    if (start % 2 !== 0) {
      arr.push(start);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
