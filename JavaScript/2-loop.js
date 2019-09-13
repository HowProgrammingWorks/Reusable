'use strict';

const MIN_VALUE = 15;
const MAX_VALUE = 30;

console.log('Begin');
for (let i = MIN_VALUE; i <= MAX_VALUE; i++) {
  if (i % 2 !== 0) console.dir(i);
}
console.log('The end \n');


const range = (start, end) => {
  console.log('Begin function');
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) console.dir(i);
  }
  console.log('The end function');
};

range(12, 33);
