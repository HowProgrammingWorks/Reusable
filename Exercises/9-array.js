'use strict';

const phonebook = [
  { name: 'M', phone: '123' },
  { name: 'A', phone: '456' },
];

const findPhoneByName = (name) => {
  for (const r of phonebook) {
    if (r.name === name)
      return r.phone;
  }
};


module.exports = { phonebook, findPhoneByName };
