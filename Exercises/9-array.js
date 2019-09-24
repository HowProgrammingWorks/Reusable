'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Aulus Vitellius', phone: '+380654664422' },
  { name: 'Antoninus Pius', phone: '+380868654346' },
];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
