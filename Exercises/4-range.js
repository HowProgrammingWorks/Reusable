'use strict';

const range = (start, end) => {
  const len = end - start;
  if (len < 0) return [];
  const array = new Array(len);
  let count = 0;
  for (let i = start; i <= end; i++) {
    array[count++] = i;
  }
  return array;
};

module.exports = { range };
