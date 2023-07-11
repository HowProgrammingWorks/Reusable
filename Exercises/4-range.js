'use strict';

const range = (start, end) => {
  const result = [];
  for (start; start <= end; start++) {
    result.push(start);
  }

  return result;
};

module.exports = { range };
