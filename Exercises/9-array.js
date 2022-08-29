'use strict';

/* Реализуйте телефонную книгу на массиве объектов.
- Объявите массив объектов с двумя полями: `name` и `phone` для хранения
телефонной книги. Пример объекта:
`{ name: 'Marcus Aurelius', phone: '+380445554433' }` и добавьте несколько
объектов в массив, чтоб было на чем проверять.
- Реализуйте функцию `findPhoneByName` с сигнатурой
`findPhoneByName(name: string): string`. При вызове функция должна находить
объект, где поле `name` равно аргументу `name` и возвращать номер телефона из
объекта. Для поиска воспользуйтесь циклом `for`. */

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Eduard', phone: '+777712345678' },
  { name: 'Fariza', phone: '+777787654321' },
];

const findPhoneByName = (name) => {
  for (const el of phonebook) {
    if (name === el.name) {
      return el.phone;
    }
  }
};

// findPhoneByName('Fariza');

module.exports = { phonebook, findPhoneByName };
