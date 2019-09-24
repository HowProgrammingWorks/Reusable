'use strict';

const phonebook = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433',
  },
  {
    name: 'Alex Pupkin',
    phone: '+380446664433',
  },
];

const findPhoneByName = name => {
  for (const i of phonebook) {
    if (i.name === name) return i.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
