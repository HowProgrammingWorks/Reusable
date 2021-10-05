'use strict';

const phonebook = {
  'Marcus Aurelius':'+380961540812',
  'Julius':'+380961549815',
  'Petro':'+38098716234'
};

const findPhoneByName = (name) => phonebook[name];


module.exports = { phonebook, findPhoneByName };
