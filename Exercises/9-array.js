'use strict';

const phonebook = [
  { name: 'Volodymyr', phone: '+380501112233' },
  { name: 'Vadym', phone: '+380673334455' },
  { name: 'Timur', phone: '+380695556677' },
  { name: 'Yehor', phone: '+380637778899' }
];

const findPhoneByName = name => {
  for (const id of phonebook)  {
    if (id.name === name)
      return id.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
