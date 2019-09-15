'use strict';

const arr = [];
for (let x = 15; x <= 30; x++) {
  if (x % 2 !== 0) {
    arr.push(x);
  }
}

module.exports = { arr };
