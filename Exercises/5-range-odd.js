'use strict';

const rangeOdd = (startNumber, endNumber) => {
  const arrayOfRange = [];
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 !== 0) arrayOfRange.push(i);
  }
  return arrayOfRange;
};
module.exports = { rangeOdd };

