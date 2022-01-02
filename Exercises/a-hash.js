'use strict';

const phonebook = {
  illia: '+380970666481',
  misha: '+380930132990',
  vanya: '+380501070675',
  victor: '+380674765177',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
