'use strict';

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Mykhailo Chubko', phone: '+38055554434' },
    { name: 'Ksenii Mizina', phone: '+380555554435' }
];

const findPhoneByName = (name) => {
    for (const entry of phonebook) {
        if (entry.name === name) {
            return entry.phone;
        }
    }
    return null;
};

module.exports = { phonebook, findPhoneByName };
