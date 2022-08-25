'use strict';

/* Реализуйте функцию `range(start: number, end: number): array` которая отдает
массив чисел из диапазона [15, 30] включая крайние числа. */

const range = (start, end) => {
  const len = end - start;
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = start; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

module.exports = { range };
