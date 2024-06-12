'use strict';

const range = (begin, stop) => {
  const array = [];
  for (let i = begin; i <= stop; i++) {
    array.push(i);
  }
  return array;
};

module.exports = { range };
