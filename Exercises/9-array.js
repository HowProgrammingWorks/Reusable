'use strict';

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380408554433' },
    { name: 'Mark Aurus',      phone: '+380434654433' },
    { name: 'M. Aurelus',      phone: '+380445598633' },
    { name: 'Marks Aurels',    phone: '+380445786433' }
];

const findPhoneByName = (name) => {
  for (const p of phonebook) {
    if (p.name === name) {
    return p;
  }
};

findPhoneByName("Marcus Aurelius");

module.exports = { phonebook, findPhoneByName };
