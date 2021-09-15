'use strict';

const range = (begin, end) => {
  const len = end - begin;
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = begin; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

console.log(range(10, 100));
//module.exports = { range };
