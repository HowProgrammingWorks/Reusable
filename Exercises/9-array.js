'use strict';

const phonebook = [
  { name: 'Aleksey', phone: '1234567890' },
  { name: 'Pavel', phone: '0987654321' },
];

const findPhoneByName = name => {
  for (const p of phonebook) {
    return p.name === name ? p.phone : null;
  }
};

module.exports = { phonebook, findPhoneByName };
