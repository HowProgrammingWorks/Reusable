'use strict';

const phonebook = {
  'Mark': '+380991112233',
  'John': '+380991112233',
  'Alex': '+380991112233'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
