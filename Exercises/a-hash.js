'use strict';

const phonebook = {
  'Marcus Aurelius I': { phone: '+380445554430' },
  'Marcus Aurelius II': { phone: '+380445554431' },
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
