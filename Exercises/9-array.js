'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'John Wick', phone: '+380123456789' }
];

const findPhoneByName = name => {
  for (const c of phonebook) {
    if (c.name === name) return c.number;
  }
};
module.exports = { phonebook, findPhoneByName };

