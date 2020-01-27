'use strict';

const phonebook = {
  nick: '264',
  niko: '364',
  niki: '564'
};

const findPhoneByName = name => phonebook[name];

console.dir(findPhoneByName('niko'));

module.exports = { phonebook, findPhoneByName };
