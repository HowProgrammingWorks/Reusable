'use strict';

const rangeOdd = (start, end) => {
 if(start > end)
  return[];
const a = [];
let b = 0;
for(let i = start; i <= end; i++) {
    if(i % 2 != 0){
      a[b] = i;
      b++;
    }

  }
return a;
};

module.exports = { rangeOdd };
