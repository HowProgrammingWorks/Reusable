'use strict';
/*
Вложенные вызовы функций в цикле
- Реализуйте функцию `average` с сигнатурой
`average(a: number, b: number): number` вычисляющую среднее арифметическое своих
аргументов.
- Реализуйте функцию `square` с сигнатурой `square(x: number): number`
вычисляющую квадрат своего аргумента.
- Реализуйте функцию `cube` с сигнатурой `cube(x: number): number`
вычисляющую куб своего аргумента.
- Вызовите функции `square` и `cube` в цикле от 0 до 9, вычисляя, соответственно
квадрат и куб от переменной цикла. Передайте квадрат и куб на каждой итерации в
функцию `average`. Результаты сложите в массив и возвратите из функции
`calculate`.
*/

const square = x => x * x;
const cube = x => x ** 3;
const average = (a, b) => (a + b) / 2;
const calculate = () => {
    const numbers = [];
    for (let i = 0; i < 10; ++i) {
        numbers.push(average(square(i), cube(i)));
    }
    return numbers;
};

module.exports = { square, cube, average, calculate };
