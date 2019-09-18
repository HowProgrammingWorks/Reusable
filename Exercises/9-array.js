'use strict';

const phonebook = [
  { name: 'Nerva', phone: '+380449998877' },
  { name: 'Traianus', phone: '+380448887766' },
  { name: 'Hadrianus', phone: '+380447776655' },
  { name: 'Antoninus Pius', phone: '+380446665544' },
  { name: 'Marcus Aurelius', phone: '+380445554433' },
];

const findPhoneByName = name => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
