'use strict';

const range = (start, end) => {
  const resArr = [];
  for (let i = start; i <= end; i++) {
    resArr.push(i);
  }
  return resArr;
};

module.exports = { range };
