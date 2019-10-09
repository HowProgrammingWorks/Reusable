'use strict';

const range = (startNumber, endNumber) => {
  const arrayOfRange = [];
  for (let i = startNumber; i <= endNumber; i++) arrayOfRange.push(i);
  return arrayOfRange;
};

module.exports = { range };
