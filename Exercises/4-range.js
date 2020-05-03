'use strict';

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    return i;
  }
};
range(15, 30);
module.exports = { range };
