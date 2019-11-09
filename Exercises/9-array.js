'use strict';

const phonebook = [
  { name: 'Marcus Aurelis', phone: '+380445554433' },
  { name: 'Valeriy Jmishenko', phone: '+380982285427' },
  { name: 'Denis Petrov', phone: '+380661488228' }
];

const findPhoneByName = name => {
  for (const i of phonebook) {
    if(i.name === name) {
      return i.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
