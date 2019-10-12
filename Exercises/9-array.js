'use strict';

const phonebook = [
  { name: 'Jeremy Clarkson', phone: '+380988475456', },
  { name: 'Marcus Aurelius', phone: '+380445554433', }
];

const findPhoneByName = name => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
