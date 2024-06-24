'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Marijn Haverbeke', phone: '+15932795060' },
  { name: 'Hugh Calum Laurie', phone: '+12345678955' },
  { name: 'Saul Hudson', phone: '+12345678900' },
];

const findPhoneByName = name => {
  for (const person of phonebook) {
  if (person.name === name) return person.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
