'use strict';

const phonebook = [
  { name: 'Michael', phone: '+38095' },
  { name: 'Andrew', phone: '+38096' },
  { name: 'Alex', phone: '+38097' },
];

const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
