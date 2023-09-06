'use strict';

const phonebook = {
  'Marcus': '+234829304823904',
  'Aurelius': '+234823742',
  'Marcus2': '+092374928734',
  'Marcus3': '+1893167491629',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
