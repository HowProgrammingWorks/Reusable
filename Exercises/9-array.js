'use strict';

const phonebook = [
  { name: 'Bob', phone: '+380445554433' },
  { name: 'Alex', phone: '+30743534453' },
  { name: 'Ann', phone: '+380986423436' },
];

const findPhoneByName = name => {
  for (const i of phonebook) {
    if (i.name === name) return i.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
