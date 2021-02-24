'use strict';

const rangeOdd = (start, end) => {
  const rangeOddNum = [];
  for (let i = start; i <= end; i++) {
    const oddNum = Math.abs(i) % 2 === 1;
    if (oddNum) {
      rangeOddNum.push(i);
    }
  }

  return rangeOddNum;
};


module.exports = { rangeOdd };
