'use strict';

const rangeOdd = (start, end) => {
  const resArr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      resArr.push(i);
    }
  }
  return resArr;
};

module.exports = { rangeOdd };
