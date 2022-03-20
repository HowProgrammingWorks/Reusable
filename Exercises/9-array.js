'use strict';

const phonebook = [{ name: 'Michil', phone: '+79143053718' },
  { name: 'Lyulya', phone: '+79969156656' }];

const findPhoneByName = (name) => {
  for (const nam of phonebook) {
    if (nam.name === name) return nam.phone;
  }
};
findPhoneByName('Lyulya');

module.exports = { phonebook, findPhoneByName };
