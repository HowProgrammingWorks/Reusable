'use strict';

const phonebook = {
  'Alex': '+79990259845',
  'Boris': '+79147255521',
  'Jake': '+79263042775',
  'John': '+79169023517',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
