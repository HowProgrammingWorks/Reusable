'use strict';

const phonebook = [
  { name: 'Vitalik', phone: '1234' },
  { name: 'Oleg', phone: '4321' },
];

const findPhoneByName = name => {
  for (const x of phonebook) {
    if (x.name === name)  return x.phone;
  }
};
module.exports = { phonebook, findPhoneByName };
