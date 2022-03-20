'use strict';

const range = (start, end) => {
  const massiv = [];
  for (start; start <= end; start++) {
    massiv.push(start);
  }
  return massiv;
};
module.exports = { range };
