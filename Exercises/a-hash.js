'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Alex White': '+380445554434'
};

const findPhoneByName = name => (phonebook[name]);

module.exports = { phonebook, findPhoneByName };
