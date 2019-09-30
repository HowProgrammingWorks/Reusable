'use strict';

const phonebook = [
  { name: 'Mark', phone: '+380991112233' },
  { name: 'John', phone: '+380991112233' },
  { name: 'Alex', phone: '+380991112233' }
];

const findPhoneByName = name => {
  for (const key of phonebook) {
    if (key.name === name) return key.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
