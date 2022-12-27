'use strict';

const phonebook = {
  'Kostia': '516 618 5532',
  'Marcus Aurelius': '+380445554433',

};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
