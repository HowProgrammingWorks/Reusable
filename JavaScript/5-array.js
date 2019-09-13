'use strict';

const persons = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
];

const findPhoneByName = name => {
  for (const id of persons) {
    if ( id.name === name) return (id.phone);
  }
};

console.log(findPhoneByName('Marcus Aurelius'));