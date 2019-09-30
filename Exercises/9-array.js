'use strict';

const phonebook = [{ name: 'Timur Garashenko', phone: '+380445554433' },
  { name: 'Artem Trifomovisch', phone: '+380636664499' }];

const findPhoneByName = name => {
  for (const obj of phonebook)
    if (obj.name === name) return obj.phone;
};

module.exports = { phonebook, findPhoneByName };
