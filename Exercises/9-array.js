'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554-433' },
  { name: 'Mao Zedong', phone: '+380445554-722' },
  { name: 'Rene Descartes', phone: '+380445554-988' },
];

const findPhoneByName = name => {
  for (const number of phonebook) number.name === name ? number.phone : null;
};

module.exports = { phonebook, findPhoneByName };
