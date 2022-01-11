'use strict';

const range = (start, end) => {
  const length = end - start;
  const array = [];
  if (length < 0) return [];
  let n = 0;
  for (let i = start; i <= end; i++) {
    array[n++] = i;
  }
  return array;
};

module.exports = { range };
