'use strict';

const range = (start, end) => {
  if (start > end)
   return[];
  const a = new Array(end - start);
  let b = 0;
  for(let i = start; i <= end; i++) {
    a[b] = i;
    b++;
  }
return a;
};

module.exports = { range };
