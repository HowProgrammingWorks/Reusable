'use strict';

const phonebook = {
  Volodymyr: '+380501112233',
  Vadym: '+380673334455',
  Timur: '+380695556677',
  Yehor: '+380637778899'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
