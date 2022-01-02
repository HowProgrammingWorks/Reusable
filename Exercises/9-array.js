'use strict';

const phonebook = [
  { name: 'illia', phone: '+380970666481' },
  { name: 'misha', phone: '+380930132990' },
  { name: 'vanya', phone: '+380501070675' },
  { name: 'victor', phone: '+380674765177' },
];

const findPhoneByName = (name) => {
  for (const man of phonebook)
    if (man.name === name) return man.phone;
};

module.exports = { phonebook, findPhoneByName };
