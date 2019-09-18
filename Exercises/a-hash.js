'use strict';

const phonebook = { 'Zuhra': '1111',
  'Leila': '2222',
  'Zulphia': '3333',
  'Gulchitai': '4444',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
