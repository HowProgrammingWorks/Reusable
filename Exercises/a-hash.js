'use strict';

const phonebook = {
  'Victor': '+380445523433',
  'Sasha': '+380963426605',
  'Pasha': '+39234234234'
};

const findPhoneByName = name => phonebook[name];

module.exports = {
  phonebook,
  findPhoneByName
};
