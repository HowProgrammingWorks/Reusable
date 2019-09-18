'use strict';

const range = (start, end) => {
  const array = [];
  for (let number = start; number <= end; number++) {
    array.push(number);
  }
  return array;
};

module.exports = { range };
