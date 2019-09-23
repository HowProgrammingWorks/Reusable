'use strict';

const phonebook = {
  'me': '+380991867780',
  'mom': '+380985994754',
  'dad': '+380963273968'
};

const findPhoneByName = name => phonebook[name];
module.exports = { phonebook, findPhoneByName };
