'use strict';

const range = (start, end) => {
  const arr = [];
  const length = end - start;
  if (length < 0) return [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

module.exports = { range };
