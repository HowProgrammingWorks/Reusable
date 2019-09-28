'use strict';

const phonebook = { Kate: '+380931120600',
  Alice: '+380931120601',
  Jasmin: '+380931120602',
  Helen: '+380931120603'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
