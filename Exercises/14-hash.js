'use strict';

const hash = {
  'Andrey': {
    phone: '+380446655443',
  },
  'Marcus Aurelius': {
    phone: '+380445554433',
  },
};

const findPhoneByName = name => {
  if (hash[name]) {
    return hash[name].phone;
  }
  return 'Not found';
};

module.exports = { findPhoneByName };
