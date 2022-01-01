'use strict';

const phonebook = {
     'Marcus Aurelius': '+380408554433' ,
     'Mark Aurus'     : '+380434654433' ,
     'M. Aurelus'     : '+380445598633' ,
     'Marks Aurels'   : '+380445786433' 
};
5
const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
