'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Aulus Vitellius': '+380654664422',
  'Antoninus Pius': '+380868654346'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
