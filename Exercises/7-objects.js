'use strict';
/*
7. Выполнить следующие пункты внутри функции `fn` (см. заготовку: `7-objects.js`)
- Создайте объект с одним полем `name` и присвойте его в константу.
- Создайте объект с одним полем `name` и присвойте его в переменную.
- Попробуйте поменять поле `name` у обоих объектов.
- Попробуйте присвоить другой объект в оба идентификатора.
- Объясните поведение кода и оставьте только рабочий код.

*/

const fn = () => {
    const name = 'name';

    const firstObj = {name};
    let secondObj = {name};
    console.log(firstObj, secondObj, '\n');

    firstObj.name = 'first';
    secondObj.name = 'second';
    console.log(firstObj, secondObj, '\n');

};

module.exports = { fn };
