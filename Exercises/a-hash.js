'use strict';

const phonebook = { 'Miha': 231141, 'Monika': 4451231, 'Andrei': 1234141 };

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
