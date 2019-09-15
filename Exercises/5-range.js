'use strict';

const range = (start, end) => {
  const arr = [];
  for (let x = start; x <= end; x++) {
    if (x % 2 !== 0) {
      arr.push(x);
    }
  }
  return arr;
};

module.exports = { range };
