'use strict';

const phonebook = [
  { name: 'Alex', phone: '+79990259845' },
  { name: 'Boris', phone: '+79147255521' },
  { name: 'Jake', phone: '+79263042775' },
  { name: 'John', phone: '+79169023517' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
