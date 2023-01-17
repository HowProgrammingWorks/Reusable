'use strict';

const rangeOdd = (min, max) => {
  const array = [];
  const oddMin = min % 2 ? min : min + 1;
  for (let value = oddMin; value <= max; value += 2) {
    array.push(value);
  }
  return array;
};

module.exports = { rangeOdd };
