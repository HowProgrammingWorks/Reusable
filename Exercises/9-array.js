'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Valeriy', phone: '+380982285427' },
  { name: 'Denis', phone: '+380665527456' },
];

const findPhoneByName = n => {
  for (const i of phonebook) {
    if (i.name === n) {
      return i.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
