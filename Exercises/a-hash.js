'use strict';

const phonebook = {
  Bob: '+380445554433',
  Alex: '+30743534453',
  Ann: '+380986423436'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
