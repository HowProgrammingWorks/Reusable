/*
Implement a phonebook on an array of objects.
- Define array of objects with two fields: `name` and `phone` (phone book).
Example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`. Add several
objects to the array.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`, which returns phone number
from that object where field `name` equals argument `name`.
Use `for` loop for this search.
*/

'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Lily James', phone: '+380999999999' },
  { name: 'Sophia Di Martino', phone: '+38088888888' },
];

const findPhoneByName = name => {
  for (const p of phonebook) {
    if (p.name === name)
      return p.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
