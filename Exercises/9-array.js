'use strict';

const phonebook = [
  { name: 'Kostia', phone: '516 618 5532' },
  { name: 'Marcus Aurelius', phone: '+380445554433' },

];

const findPhoneByName = (name) => {
  for (const pers of phonebook) {
    if (pers.name === name) return pers.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
