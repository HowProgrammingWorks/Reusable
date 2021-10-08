'use strict';

const phonebook = [
  { name: 'Vanya', phone: '+380447859437' },
  { name: 'Kostya', phone: '+380445033776' },
  { name: 'Andriy', phone: '+380447483374' }
];

const findPhoneByName = (name) => {
  for (const acc of phonebook) {
    if (acc.name === name) return acc.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
