'use strict';

const phonebook = [
  { name: 'Marcus Aurelius I', phone: '+380445554430' },
  { name: 'Marcus Aurelius II', phone: '+380445554431' },
];

const findPhoneByName = (name) => {
  for (const p of phonebook) {
    if (p.name === name) return p.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
