'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+234829304823904' },
  { name: 'Aurelius', phone: '+234823742' },
  { name: 'Marcus2', phone: '+092374928734' },
  { name: 'Marcus3', phone: '+1893167491629' },
];

const findPhoneByName = name => {
  for (const r of phonebook) {
    if (r.name === name) return r.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
