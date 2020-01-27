'use strict';

const phonebook = {
  'Stas': '+7-999-88-88',
  'Igor': '+7-999-77-77',
  'Nikita': '+7-999-66-66',
};

const findPhoneByName = name => phonebook[name];


module.exports = { phonebook, findPhoneByName };
