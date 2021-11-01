'use strict';
const obj = [
    {
        name: 'Marcus Aurelius',
        phone: '+380445554433',
    },
    {
        name: 'vasya',
        phone: '+380445554432',
    },
];

const findPhoneByName = name => {
    for (const i of obj) {
        if (i.name === name) {
            return i.phone;
        }
    }
};

console.log(findPhoneByName('Marcus Aurelius'));


