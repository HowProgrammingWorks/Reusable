'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Timur', phone: '+380661874632' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
