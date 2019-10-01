'use strict';

const rangeOdd = (start, end) => {
  const result = [];

  for (let i = start; i < end + 1; i++) {
    if (i % 2 !== 0) result.push(i);
  }

  return result;
};

module.exports = { rangeOdd };
