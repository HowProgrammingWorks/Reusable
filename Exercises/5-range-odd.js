'use strict';

/* Реализуйте функцию `rangeOdd(start: number, end: number): array` которая
отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа. */

const rangeOdd = (start, end) => {
  const len = Math.ceil((end - start) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;

  for (let k = start; k <= end; k++) {
    if (k % 2 !== 0) array[i++] = k;
  } return array;
};

module.exports = { rangeOdd };