'use strict';

const range = (min, max) => {
  const array = [];
  for (let value = min; value <= max; value++) {
    array.push(value);
  }
  return array;
};

module.exports = { range };
