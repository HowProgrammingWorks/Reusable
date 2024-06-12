'use strict';

const phonebook = [{ name: 'Zuhra', phone: '1111' },
  { name: 'Leila', phone: '2222' },
  { name: 'Zulphia', phone: '3333' },
  { name: 'Gulchitai', phone: '4444' },
];

const findPhoneByName = name => {
  for (const rec of phonebook) {
    if (rec.name === name) return rec.phone;
  }
};
module.exports = { phonebook, findPhoneByName };
