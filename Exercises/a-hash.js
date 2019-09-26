/*
Implement a phonebook on a hash-table (dictionary).
- Define hash with `key` containing `name` (from previous example)
and `value` containing `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. The function should
return phone number from hash/object.
Use `hash[key]` to find needed phone.
*/



'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Lily James': '+380999999999',
  'Sophia Di Martino': '+38088888888',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
