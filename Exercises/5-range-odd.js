'use strict';

const rangeOdd = (s, e) => {
  const arrRange = [];
  for (let i = s; i <= e; i++) {
    if (i % 2 !== 0) {
      arrRange.push(i);
    }
  }
  return arrRange;
};

module.exports = { rangeOdd };
