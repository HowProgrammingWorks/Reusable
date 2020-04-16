'use strict';

const phonebook = {
  'Marcus Aurelius2': '+380445554433',
  'Marc Aurelius2': '+70445554433',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
