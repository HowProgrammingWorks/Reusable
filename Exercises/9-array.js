'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Vasya', phone: '+38454545454' },
];

const findPhoneByName = name => {
  for (const rec of phonebook) {
    if (rec.name === name) return rec.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
