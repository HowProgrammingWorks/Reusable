'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Alex White', phone: '+380445554434' }
];

const findPhoneByName = n => {
  for (const { name, phone } of phonebook) {
    if (name === n) return phone;
  }
};

module.exports = { phonebook, findPhoneByName };
