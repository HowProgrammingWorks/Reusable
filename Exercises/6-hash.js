'use strict';
const obj = {
    marcus: {
        name: 'Marcus Aurelius',
        phone: '+380445554433',
    },
    vasya: {
        name: 'vasya',
        phone: '+380445554432',
    },
};

const findPhoneByName = name => `${name} phone number: ${obj[name].phone}`;

console.log(findPhoneByName('marcus'));



