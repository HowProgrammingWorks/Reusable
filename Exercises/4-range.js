'use strict';

const range = (begin, end) => {
  const arr = [];
  for (let i = begin; i < end + 1; i++) {
    arr.join(i);
  }
  return arr;
};

module.exports = { range };
