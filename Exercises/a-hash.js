'use strict';

const phonebook = {
  Marcus: '+380445554433',
  Vasya: '+38454545454',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
