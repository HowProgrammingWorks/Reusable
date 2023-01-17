'use strict';

const phonebook = {
  Tima: '907-200-8803',
  Gixe: '907-212-4798',
  'Tima G.': '907-221-1144'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
