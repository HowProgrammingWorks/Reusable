'use strict';

const phonebook = {'Timur Garashenko':'+380445554433','Artem Trifomovisch':'+380636664499'};

const findPhoneByName = key => phonebook[key];

module.exports = { phonebook, findPhoneByName };
