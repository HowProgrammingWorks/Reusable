'use strict';

const rangeOdd = (start, end) => {
  const result = [];
  for (start; start <= end; start++) {
    if (start % 2 !== 0) {
      result.push(start);
    }
  }

  return result;
};

module.exports = { rangeOdd };
