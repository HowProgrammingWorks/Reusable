'use strict';

const range = (start, end) => {
  const array = [];
  for (let i = start; i <= end; i += 1) {
    array.push(i);
  }
  return array;
};

module.exports = { range };
