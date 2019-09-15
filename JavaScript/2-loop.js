'use strict';

for (let i = 15; i < 30; i +=2) {
  console.log(i);
}

const range = (start, end) => {
  let j = (start % 2 === 0) ? 1 : 0;

  for (let i = start + j; i <= end; i += 2) {
    console.log(i);
  }
};
