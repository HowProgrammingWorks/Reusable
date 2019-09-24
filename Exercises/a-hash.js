'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Alex Pupkin': '+380446664433',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
