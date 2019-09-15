'use strict';

const phoneBook = [{ name: 'Marcus Aurelius', phone: '+380445554433' }, { name: 'Andrey', phone: '+380445598788' }];

const findPhoneByName = name => {
  for (const item of phoneBook) {
    if (item.name === name) {
      return item.phone;
    }
  }
  return 'Not found';
};

module.exports = { findPhoneByName };
