'use strict';

const phonebook = {
  Marcus: { phone: '+38011111' },
  Antonius: { phone: '+38022222' },
  Yulius: { phone: '+38033333' }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
