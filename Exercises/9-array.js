'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+380445554433' },
  { name: 'Yaroslav', phone: '+380963469605' }
];

const findPhoneByName = name => {
  for (const h of phonebook) {
    if (h.name === name) return h.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
