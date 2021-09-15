'use strict';
const rangeOdd = (start, end) => {
  const len = end - start;
  if (len < 0) return [];
  const arrey = [];
  let a = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) continue;

    arrey[a++] = i;
  }
  return arrey;
};
module.exports = { rangeOdd };
