'use strict';

const fn = () => {
  const object1 = { name: 'Roman' };
  let object2 = { name: 'Serge' };
  object1.name = 'Foma';
  object2.name = 'Alex';
  object2 = { url: 'https://github.com' };
};

module.exports = { fn };
