'use strict';

const rangeOdd = (start, end) => {
  const res = [];
  if (start % 2 === 0) start++;
  for (let i = start; i <= end; i += 2) res.push(i);
  return res;
};

module.exports = { rangeOdd };
