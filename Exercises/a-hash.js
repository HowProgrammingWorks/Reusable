'use strict';

const phonebook = {
  Vladislav: +380660044125,
  Anya: +38090647223,
  Oleg: +38074653237
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
