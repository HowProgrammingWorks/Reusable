'use strict';

const phonebook = [{ name: 'Kate', phone: '+380931120600' },
  { name: 'Alice', phone: '+380931120601' },
  { name: 'Jasmin', phone: '+380931120602' },
  { name: 'Helen', phone: '+380931120603' }];

const findPhoneByName = name => {
  for (const contact of phonebook) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
