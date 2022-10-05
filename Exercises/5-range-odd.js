'use strict';

const rangeOdd = (start, end) => {
  const len = Math.ceil((end - start) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      array[count++] = i;
    }
  }
  return array;
};

module.exports = { rangeOdd };
