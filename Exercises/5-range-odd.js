'use strict';


const rangeOdd = (begin, stop) => {
  const array = [];
  for (let i = begin; i <= stop; i++) {
    (i % 2) ? array.push(i) : null;
  }
  return array;
};
module.exports = { rangeOdd };
