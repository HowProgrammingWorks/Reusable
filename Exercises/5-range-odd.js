'use strict';

const rangeOdd = (begin, end) => {
  const arr = [];
  for (let i = begin; i < end + 1; i++) {
    if (i % 2 !== 0) {
      arr.join(i);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
