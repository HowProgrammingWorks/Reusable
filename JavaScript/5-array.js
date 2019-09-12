'use strict';

const phoneBook = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  },
  {
    name: 'Antoninus Pius',
    phone: '+380447778563'
  },
  {
    name: 'Octavianus Augustus',
    phone: '+380441126236'
  }
];

const findPhoneByName = name => {
  for (const i of phoneBook) {
    if (i.name === name) return i.phone;
  }
};
