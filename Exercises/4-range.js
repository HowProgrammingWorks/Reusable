'use strict';

const range = (start, end) => {
  const rangeOfNum = [];
  for (let i = start; i <= end; i++) {
    rangeOfNum.push(i);
  }

  return rangeOfNum;
};

module.exports = { range };
