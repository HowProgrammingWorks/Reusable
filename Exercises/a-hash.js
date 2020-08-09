'use strict';

const phonebook = {
  Jmih: { phone: '+380982285427' },
  Urich: { phone: '+380661488228' },
  Denis: { phone: '+380445422827' },
  Shpack: { phone: '+380541488273' },
  Sanya: { phone: '+380965042075' }
};

const findPhoneByName = name => phonebook[name].phone;

module.exports = { phonebook, findPhoneByName };
