'use strict';

const range = (start, end) => {
  const length = end - start;

  if (length < 0) return [];
  const arr = [];

  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }

  return arr;
};

module.exports = { range };
