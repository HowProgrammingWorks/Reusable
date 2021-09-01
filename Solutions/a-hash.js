'use strict';

const phonebook = {
  Marcus: '+380445554433',
  Timur: '+380661874632',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
