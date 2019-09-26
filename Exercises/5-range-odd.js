/*Implement function `rangeOdd(start: number, end: number)` returning
array with all odd numbers from the range [15, 30] including endpoints.
*/
'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  for (; start <= end; start++) {
    if (start % 2 !== 0) {
      arr.push(start);
    }
  }
  return arr;
};

module.exports = { rangeOdd };
