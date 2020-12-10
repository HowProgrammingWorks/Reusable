'use strict';

const range = (start, end) => {
  const res = [];
  for (let i = start; i <= end; i += 1) {
    res.push(i);
  }
  return res;
};

module.exports = { range };
