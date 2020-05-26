'use strict';
// Реализуйте функцию `range(start: number, end: number): array` которая отдает
// массив чисел из диапазона [15, 30] включая крайние числа.

const range = (start, end) => {
    const numbers = []
    for (start; start <= end; ++start){
        numbers.push(start);
    }
    return numbers;
}

module.exports = { range };
