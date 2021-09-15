'use strict';
const range = (start, end) => {
  const len = end - start;
  if (len < 0) return [];
  const arrey = [];
  let a = 0;
  for (let i = start; i <= end; i++, a++)
    arrey[a] = i;
  return arrey;


};

module.exports = { range };
