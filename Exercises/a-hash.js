'use strict';

const phonebook = {
  Artem: {
    name: 'Artem',
    phone: '+38 096 228 14 88',
  },
  Timur: {
    name: 'Timur',
    phone: '+38 067 235 71 11',
  }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
