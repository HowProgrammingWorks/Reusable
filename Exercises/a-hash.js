'use strict';

const phonebook = {
  Jeremy: { name: 'Jeremy Clarkson', phone: '+380988475456', },
  Marcus: { name: 'Marcus Aurelius', phone: '+380445554433', },
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
