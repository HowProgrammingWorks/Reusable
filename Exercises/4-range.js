'use strict';

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
};

module.exports = { range };
