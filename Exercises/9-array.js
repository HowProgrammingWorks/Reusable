'use strict';

let phonebook = [
 {name :'Marcus Aurelius', phone :'+380961540812'},
 {name :'Julius', phone :'+380961549815'},
 {name :'Petro', phone :'+38098716234'}];

const findPhoneByName = (name) => {
 for (const man of phonebook){
  if (man.name === name) return man.phone;
 }
};

module.exports = { phonebook, findPhoneByName };
