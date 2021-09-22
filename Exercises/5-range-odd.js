'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  if (array.length < 0) return [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0)
      array.push(i);
  }
  return array;
};

module.exports = { rangeOdd };
