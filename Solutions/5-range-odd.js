'use strict';

const rangeOdd = (begin, end) => {
  const len = Math.ceil((end - begin) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = begin; n <= end; n++) {
    if (n % 2 !== 0) array[i++] = n;
  }
  return array;
};

module.exports = { rangeOdd };
