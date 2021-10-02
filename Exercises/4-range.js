'use strict';

const range = (start, end) => {
  const array = [];
  for (start; start <= end; start++) {
    array.push(start);
  }
  return array;
};

module.exports = { range };
