'use strict';

const phonebook = {
  mich: '+79143053718',
  lyalya: '+79969156656',
};

const findPhoneByName = (name) => phonebook(name);


module.exports = { phonebook, findPhoneByName };
