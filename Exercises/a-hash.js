'use strict';

const phonebook = {
  name: 'Orkhan Abbasov',
  phone: '+380445554433'
};

const findPhoneByName = (name) => name in phonebook;

module.exports = { phonebook, findPhoneByName };
