'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Antonius Pius', phone: '+380445556677' },
  { name: 'Titus Aurelius', phone: '+380445558899' },
  { name: 'Boionius Arrius', phone: '+380445551122' }
];

const findPhoneByName = name => {
  for (const pr of phonebook) {
    if (pr.name === name) return pr.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
