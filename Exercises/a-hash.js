'use strict';

const phonebook = {
  Dmytro: '+380675959992',
  Violetta: '+380672281337'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
