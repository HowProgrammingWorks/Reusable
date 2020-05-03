'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (let i = 0; i <= end - start; i++) {
    if ((start + i) % 2 === 1) {
      arr[i] = start + i;
    }
  }
  return arr.filter(Number);
};
rangeOdd(15, 30);

module.exports = { rangeOdd };

