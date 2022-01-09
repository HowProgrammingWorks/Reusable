'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Andrei Shneyer', phone: '+380979707970' }
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
