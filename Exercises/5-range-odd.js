'use strict';
/* 
Реализуйте функцию `rangeOdd(start: number, end: number): array` которая
отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.
*/

const rangeOdd = (start, end) => {
    const numbers = []
    for (start; start <= end; ++start){
        if (start % 2 !== 0) {
            numbers.push(start);
        }

    }
    return numbers;
}

module.exports = { rangeOdd };
