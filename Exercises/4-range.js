'use strict';

const range = (start, end) => {
  const p = [];
  for (let i = start; i <= end; i++) {
    if ((i >= 15) && (i <= 30)) p.push(i);
  }
  return p;
};

console.dir(range(10, 35));
module.exports = { range };
