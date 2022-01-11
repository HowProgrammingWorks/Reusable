'use strict';

const phonebook = [
  { name: 'Dmytro', phone: '+380675959992' },
  { name: 'Violetta', phone: '+380672281337' }
];

const findPhoneByName = (name) => {
  for (const x of phonebook) {
    if (x.name === name) return x.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
