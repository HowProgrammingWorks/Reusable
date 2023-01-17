'use strict';

const phonebook = [
  { name: 'Tima', phone: '907-200-8803' },
  { name: 'Gixe', phone: '907-212-4798' },
  { name: 'Tima G.', phone: '907-221-1144' },
];

const findPhoneByName = (name) => {
  for (const entry of phonebook) {
    if (entry.name === name) return entry;
  }
};

module.exports = { phonebook, findPhoneByName };
