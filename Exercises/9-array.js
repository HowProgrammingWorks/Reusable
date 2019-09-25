'use strict';

const phonebook = [
  { name: 'Oleg', phone: '+380951234567' },
  { name: 'Eva', phone: '+380952345678' },
  { name: 'Natali', phone: '+380953456789' },
];

const findPhoneByName = name => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
