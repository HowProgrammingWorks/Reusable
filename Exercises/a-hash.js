"use strict";

const phonebook = {
  Vitalik: 1234,
  Oleg: 4321,
};

const findPhoneByName = name =>  phonebook[name];
findPhoneByName("Oleg");

module.exports = { phonebook, findPhoneByName };
