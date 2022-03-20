'use strict';

const rangeOdd = (start, end) => {
  const massiv = [];
  for (start; start <= end; start++) {
    if (start % 2 !== 0) massiv.push(start);
  }
  return massiv;
};

module.exports = { rangeOdd };
