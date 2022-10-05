'use strict';

const phonebook = {
  Michael: '+38095',
  Andrew: '+38096',
  Alex: '+38097',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
