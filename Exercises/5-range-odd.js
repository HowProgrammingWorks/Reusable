'use strict';

const rangeOdd = (start, end) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2) array.push(i);
  }
  return array;
};
console.dir(rangeOdd(10, 15));
module.exports = { rangeOdd };
