'use strict';

const phonebook = [
  {name: 'Me', phone: '+380991867780'},
  {name: 'Dad', phone: '+380963273968'},
  {name: 'Mom', phone: '+380985994754'}
];

const findPhoneByName =  (name) => {
  for (let obj of phonebook) {
    if (obj.name === name) return obj.phone;  
  };
};
module.exports = { phonebook, findPhoneByName };
