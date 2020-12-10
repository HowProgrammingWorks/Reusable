'use strict';

const rangeOdd = (start, end) => {
  const res = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2) res.push(i);
  }

  return res;
};

module.exports = { rangeOdd };
