'use strict';

const phonebook = [
  { name: '', phone: '' },
  { name: '', phone: '' },
];

const findPhoneByName = name => {
  for (const key of phonebook) {
    if (key.name === name) return key.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
