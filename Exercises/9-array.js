'use strict';

const phonebook = [
  { name: 'Peter', phone: '8-800-555-35-35' },
  { name: 'Artem', phone: '+38-067-123-45-67' },
];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
