'use strict';

const range = (start, end) => {
  const array = [];
  if (array.length < 0) return [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

module.exports = { range };
