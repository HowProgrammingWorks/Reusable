'use strict';

/*
9. Реализуйте телефонную книгу на массиве объектов.
- Объявите массив объектов с двумя полями: `name` и `phone` для хранения
телефонной книги. Пример объекта:
`{ name: 'Marcus Aurelius', phone: '+380445554433' }` и добавьте несколько
объектов в массив, чтоб было на чем проверять.
- Реализуйте функцию `findPhoneByName` с сигнатурой
`findPhoneByName(name: string): string`. При вызове функция должна находить
объект, где поле `name` равно аргументу `name` и возвращать номер телефона из
объекта. 
*/

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554430' }, 
    { name: 'Robbie Fowler', phone: '+380445554431' },
    { name: 'William McDougall', phone: '+380445554432' },
    { name: 'Conan the Barbarian', phone: '+380445554433' },
    { name: 'Amalie Emmy Noether', phone: '+380445554432' },
]

const findPhoneByName = (name) => {
	for (const obj of phonebook) {
		if (obj.name === name) {
			return obj.phone;
		}
	}
};

// let x = findPhoneByName('Amalie Emmy Noether');
// console.log(x);

module.exports = { phonebook, findPhoneByName };
