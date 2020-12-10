'use strict';

const phonebook = {
  Aleksey: '1234567890',
  Pavel: '0987654321'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
