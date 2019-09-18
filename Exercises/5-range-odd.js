'use strict';

const rangeOdd = (start, end) => {
  const res = [];
  (start % 2 ? start : start++);
  for (let i = start; i <= end; i += 2) res.push(i);
  return res;
};

module.exports = { rangeOdd };
