'use strict';

const phonebook = [
  { name: 'Marcus', phone: '+38011111' },
  { name: 'Antonius', phone: '+38022222' },
  { name: 'Yulius', phone: '+38033333' }
];

const findPhoneByName = name => {
  for (const item of phonebook)
    if (item.name === name) return item.phone;
};

module.exports = { phonebook, findPhoneByName };
