'use strict';

const phonebook = {
  Dima: { number: '+380660800863' },
  Misha: { number: '+380687507704' },
  Stepan: { number: '+380682636436' },
  Andrew: { number: '+380979894141' },
};

const findPhoneByName = name => (phonebook[name]);

module.exports = { phonebook, findPhoneByName };
