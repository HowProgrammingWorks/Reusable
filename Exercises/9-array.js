'use strict';

const phonebook = [
  { name: 'Vladislav', phone: +380660044125 },
  { name: 'Anya', phone: +38090647223 },
  { name: 'Oleg', phone: +38074653237 }];

const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name) return name;
  }
};

module.exports = { phonebook, findPhoneByName };
