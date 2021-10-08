'use strict';

const phonebook = {
  'Vanya': '+380447859437',
  'Kostya': '+380445033776',
  'Andriy': '+380447483374',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
