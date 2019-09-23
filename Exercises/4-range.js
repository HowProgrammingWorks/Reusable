'use strict';

const range = (start, end) => {
  const ar = [];
  for(let i = 0; i<=(end-start); i++  )
    ar[i] = start + i;
  return ar;
};

module.exports = { range };
