'use strict';

/* Реализуйте функцию `createUser` с сигнатурой
`createUser(name: string, city: string): object`. Пример вызова:
`createUser('Marcus Aurelius', 'Roma')` функция должна вернуть объект
`{ name: 'Marcus Aurelius', city: 'Roma' }`*/


const createUser = (name, city) => {
  const user = {
    name,
    city,
  };
  return user;
};

// console.log(createUser('Marcus Aurelius', 'Roma'));

module.exports = { createUser };
