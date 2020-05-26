'use strict';

/*
8. Реализуйте функцию `createUser` с сигнатурой
`createUser(name: string, city: string): object`. Пример вызова:
`createUser('Marcus Aurelius', 'Roma')` функция должна вернуть объект
`{ name: 'Marcus Aurelius', city: 'Roma' }`
*/

const createUser = (name, city) => {
    return {name, city};
};

module.exports = { createUser };
