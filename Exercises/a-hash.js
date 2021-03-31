'use strict';

const phonebook = {
  marcus: { name: 'Marcus Aurelius', phone: '+380445554433' },
  alex: { name: 'Alex Dobrov', phone: '+914543295661' }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
