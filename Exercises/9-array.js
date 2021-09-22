'use strict';

const phonebook = [
  { name: 'John', phone: '+380669876420' },
  { name: 'Vladimir', phone: '+380959546176' },
  { name: 'Sergey', phone: '+380997865430' }
];

const findPhoneByName = (name) => {
  for (const k of phonebook) {
    if (k.name === name)
      return k.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
