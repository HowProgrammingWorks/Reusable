'use strict';

const phonebook = {
  M: 123,
  A: 456,
};

const findPhoneByName = (name) => phonebook[name];
console.log(findPhoneByName('A'));
module.exports = { phonebook, findPhoneByName };
