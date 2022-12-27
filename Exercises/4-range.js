'use strict';

const range = (start, end) => {
  const arr = [];
  for (let i = 0; i <= end - start; i++) {
    //arr.push(start + i);
    arr[i] = start + i;
  }
  return arr;
};

module.exports = { range };
