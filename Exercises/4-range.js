'use strict';

const range = (start, end) => {
  const ar = [];
  for (let i = start; i <= end; i++) {
    ar[i - start] = i;
  }
  return ar;
};
module.exports = { range };
