'use strict';

const rangeOdd =  (start, end) => {
  const length = end - start;
  const array = [];
  if (length < 0) return [];
  let n = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) array[n++] = i;
  }
  return array;
};

module.exports = { rangeOdd };
