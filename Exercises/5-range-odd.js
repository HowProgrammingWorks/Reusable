'use strict';

const rangeOdd = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    const flag = i % 2 === 0;

    !flag && arr.push(i);
  }

  return arr;
};

module.exports = { rangeOdd };
