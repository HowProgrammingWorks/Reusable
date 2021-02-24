'use strict';

const phonebook = {
  Marcus: '+380445554433',
  Julius: '+380447776644',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
