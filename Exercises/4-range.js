'use strict';


const range = (start, end) => {
  const arr = [];
  const length = end - start;

  for (let i = 0; i <= length; i++) {
    arr[i] = start;
    start++;
  }

  return arr;
};



module.exports = { range };
