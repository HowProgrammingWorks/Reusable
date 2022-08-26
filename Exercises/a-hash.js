'use strict';

/* Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
- Задайте справочник (объект) с ключами равными значениям поля `name` (из
предыдущего примера) и значениями равными полю `phone`.
- Реализуйте функцию `findPhoneByName` с сигнатурой
`findPhoneByName(name: string): string` которая находит телефон в хеше по имени
и возвращает номер телефона. Используйте `hash[key]` для поиска телефона. */

/* const phonebook = {
  marcus: { name: 'Marcus', phone: '+380445554433' },
  eduard: { name: 'Eduard', phone: '+777712345678' },
};

const findPhoneByName = (name) => {
  for (const el of phonebook) {
    if (name === el[name]) return el.phone;
  }
}; */

const phonebook = {
  Marcus: '+380445554433',
  Timur: '+380661874632',
};

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Marcus'));

module.exports = { phonebook, findPhoneByName };
