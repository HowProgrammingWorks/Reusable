'use strict';

const range = (startNumber, endNumber) => {
  const result = [];
  for (let i = startNumber; i <= endNumber; i += 1) {
    result.push(i);
  }
  return result;
};

module.exports = { range };
