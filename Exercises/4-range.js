/*Implement function `range(start: number, end: number): array` returning
array with all numbers from the range [15, 30] including endpoints.
*/

'use strict';

const range = (start, end) => {
  const arr = [];
  for (; start <= end; start++) {
    arr.push(start);
  }
  return arr;
};

module.exports = { range };

