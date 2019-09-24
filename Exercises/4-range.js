'use strict';

const range = (min, max) => {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
};

module.exports = { range };
