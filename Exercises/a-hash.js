'use strict';

const phonebook = {
  Marcus: { phone: '+380445554433' },
  Marijn: { phone: '+15932795060' },
  Hugh: { phone: '+12345678955' },
  Saul: { phone: '+12345678900' },
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
