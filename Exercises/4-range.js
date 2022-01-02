'use strict';

const range = (start, end) => {
  let index = start;
  const array = [];
  for (index; index <= end; index++) {
    array.push(index);
  }
  return array;
};

module.exports = { range };
