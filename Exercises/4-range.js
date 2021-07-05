'use strict';

const range = (s, e) => {
  const arrRange = [];
  for (let i = s; i <= e; i++) {
    arrRange.push(i);
  }
  return arrRange;
};

module.exports = { range };

