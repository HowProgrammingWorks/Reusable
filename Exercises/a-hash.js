'use strict';

const phonebook = {
  'first': '+380123456789',
  'second': '+380987654321'
};

const findPhoneByName = name => phonebook[ name ];

module.exports = { phonebook, findPhoneByName };

