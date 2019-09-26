'use strict';

const rangeOdd = (function(start, end) {
  const ar = [];
  for(let i=start; i<=end; i++)
  if (i % 2 !== 0) ar.push(i);
  return ar;
});

module.exports = { rangeOdd };
