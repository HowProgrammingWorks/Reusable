'use strict';

const rangeOdd = (start, end) => {
  let index = start;
  const array = [];
  for (index; index <= end; index++) {
    if (index % 2) array.push(index);
  }
  return array;
};

module.exports = { rangeOdd };
