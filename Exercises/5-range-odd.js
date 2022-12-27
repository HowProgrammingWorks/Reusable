'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (let i = 0; i <= end - start; i++) {
    if ((start + i) % 2 !== 0) arr.push(start + i);
  }
  return arr;
};

module.exports = { rangeOdd };
