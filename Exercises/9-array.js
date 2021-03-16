'use strict';

const phonebook = [
  {name: 'King', phone: '7777777'},
  {name: 'Raja', phone: '9999999'},
  {name: 'Syltan', phone: '5555555'}
];

const findPhoneByName = str => {
  for (const item of phonebook) {
    if (item.name === str) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
