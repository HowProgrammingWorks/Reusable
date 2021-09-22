'use strict';

const phonebook = {
  John: '+380669876420',
  Vladimir: '+380959546176',
  Sergey: '+380997865430'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
