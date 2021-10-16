'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Miha', phone: '+380445555511' },
  { name: 'Vasya', phone: '+380445556622' }
];

const findPhoneByName = name => {
  for (const names of phonebook) {
    if (names.name === name) return names.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
