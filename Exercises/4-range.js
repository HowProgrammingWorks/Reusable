'use strict';

const range = (start, end) => {
  let arr = [];

  for (let i = start; i <= end; i++) {
    arr = [...arr, start++];
  }
  return arr;
};

module.exports = { range };
