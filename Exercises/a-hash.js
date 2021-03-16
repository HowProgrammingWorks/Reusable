'use strict';

const phonebook =
  { 'King': '7777777',
    'Raja': '9999999',
    'Syltan': '5555555' };

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
