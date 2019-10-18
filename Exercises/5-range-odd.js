'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  while (start <= end) {
    if (start % 2 !== 0) {
      array.push(start);
      start++;
    } else {
      start++;
    }
  }
  return array;
};

module.exports = { rangeOdd };
