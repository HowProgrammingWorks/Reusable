'use strict';

const phonebook = {
  oleg: '+380951234567',
  Eva: '+380952345678',
  atali: '+380953456789'
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
