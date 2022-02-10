'use strict';

const phonebook = [
  {
    name: 'Orkhan Abbasov',
    phone: '+380445554433'
  },
  {
    name: 'Oktay Abbasov',
    phone: '+380445554433'
  }
];

const findPhoneByName = (name) => {
  for (const v of phonebook) {
    return v.name === name ? v.phone : '';
  }
};



module.exports = { phonebook, findPhoneByName };
