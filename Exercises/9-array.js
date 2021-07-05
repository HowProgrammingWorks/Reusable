'use strict';

const phonebook = [{ name: 'Alex', phone: '+79023453356' },
  { name: 'Will', phone: '+77904845678' },
  { name: 'Bill', phone: '+89083456787' },
  { name: 'Dill', phone: '+99018978675' },
  { name: 'Nill', phone: '+09048598989' }, ];

const findPhoneByName = n => {
  for (const i of phonebook) {
    if (i.name === n) {
      return i.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
