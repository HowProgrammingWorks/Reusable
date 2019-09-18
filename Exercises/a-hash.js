'use strict';

const phonebook = {
  'Nerva': '+380449998877',
  'Traianus': '+380448887766',
  'Hadrianus': '+380447776655',
  'Antoninus Pius': '+380446665544',
  'Marcus Aurelius': '+380445554433',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
