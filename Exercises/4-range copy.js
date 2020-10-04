'use strict';

const range = (start, end) => {
  const arr = [];
  for (let i = 0; i <= end - start; i++) {
    arr[i] = start + i;
  }
  return arr;
};
range(15, 30);
module.exports = { range };
