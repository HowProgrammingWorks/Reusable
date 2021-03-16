'use strict';

const rangeOdd = (startNumber, endNumber) => {
  const result = [];
  for (let i = startNumber; i <= endNumber; i += 1) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
};

module.exports = { rangeOdd };
