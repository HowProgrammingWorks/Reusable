'use strict';


const rangeOdd = (begin, stop) => {
  const array = [];
  for (let i = begin; i <= stop; i++) {
    if (i % 2 !== 0) array.push(i);
  }
  return array;
};
module.exports = { rangeOdd };
