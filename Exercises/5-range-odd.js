'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  for (start; start <= end; start++) {
    if (start % 2 === 1 || start % 2 === -1) array.push(start);
  }
  return array;
};

module.exports = { rangeOdd };
