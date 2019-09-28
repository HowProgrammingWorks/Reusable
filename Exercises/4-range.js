'use strict';

const range = (start, end) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return  array;
};

module.exports = { range };
