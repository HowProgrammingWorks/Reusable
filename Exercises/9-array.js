'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+38044555443' },
  { name: 'Alex', phone: '+91454329566' },
];

const findPhoneByName = name => {
  for (const person of phonebook)
    return person.name === name ? person.phone : null;
};

module.exports = { phonebook, findPhoneByName };
