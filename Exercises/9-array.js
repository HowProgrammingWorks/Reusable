'use strict';

const phonebook = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  },
  {
    name: 'some',
    phone: '+380445552233'
  },
  {
    name: 'another',
    phone: '+380445552211'
  },
  {
    name: 'vanya',
    phone: '+380995552233'
  }
];

const findPhoneByName = n => {
  for (const person in phonebook) {
    if (person.name === n) return person.phone;
  }
};

module.exports = {
  phonebook,
  findPhoneByName
};
