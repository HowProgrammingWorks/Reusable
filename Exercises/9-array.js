'use strict';

const phonebook = [
  { name: 'nik', phone: '264' },
  { name: 'niko', phone: '364' },
  { name: 'niki', phone: '564' },
];

const findPhoneByName = name => {
  for (const n of phonebook) {
    if (name === n.name) return n.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
