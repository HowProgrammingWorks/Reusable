'use strict';

const phonebook =
  {
    'Marcus Aurelius': '+380445554433',
    'Andrei Shneyer': '+380979707970'
  };

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
