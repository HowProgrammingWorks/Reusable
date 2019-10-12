'use strict';

const range = (start, end) => {
  const arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
};

module.exports = { range };
