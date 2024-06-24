'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Antonius Pius': '+380445556677',
  'Titus Aurelius': '+380445558899',
  'Boionius Arrius': '+380445551122',
};
const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
