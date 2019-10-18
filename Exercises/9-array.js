'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mao', phone: '+280445554433' },
  { name: 'Rene', phone: '+580445554433' },
];

const findPhoneByName = name => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
