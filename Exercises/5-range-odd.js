'use strict';

const rangeOdd = (start, end) => {
  Array = [];
  if (start % 2 === 0 ) for (let v = start + 1; v <= end; v = v + 2) Array.push(v);
  else for (let v = start; v <= end; v = v + 2) Array.push(v);
  return Array;
};

module.exports = { rangeOdd };
