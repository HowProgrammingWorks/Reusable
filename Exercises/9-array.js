'use strict';

const phonebook = [
  { name: 'Dima', number: '+380660800863' },
  { name: 'Misha', number: '+380687507704' },
  { name: 'Stepan', number: '+380682636436' },
  { name: 'Andrew', number: '+380979894141' },
];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.number;
  }
};
module.exports = { phonebook, findPhoneByName };
