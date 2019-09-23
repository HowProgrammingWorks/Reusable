'use strict';

const range = (start, end) => {
  Array = [];
  for (let v = start; v <= end; v++) {
    Array.push(v);
  };
  return Array;
};

module.exports = { range };
