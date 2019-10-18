'use strict';


const range = (start, end) => {
  const array = [];
  while (end >= start) {
    array.push(start++);
  }
  return array;
};

module.exports = { range };
