'use strict';

const phonebook = {
  MarcusAurelius: { phone: '+380445554-433' },
  MaoZedong: { phone: '+380445554-722' },
  ReneDescartes: { phone: '+380445554-988' },
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
