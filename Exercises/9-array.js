'use strict';

const phonebook = [
  {
    name: 'Stas',
    phone: '+7-999-88-88',
  },
  {
    name: 'Igor',
    phone: '+7-999-77-77',
  },
  {
    name: 'Nikita',
    phone: '+7-999-66-66',
  },
];

const findPhoneByName = name => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
