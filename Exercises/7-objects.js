'use strict';

const fn = () => {
  const obj1 = { name: 'Vitalik' };
  let obj2 = { name: 'Oleg' };
  obj1.name = 'Oleg';
  obj2.name = 'Vitalik';
  obj2 = { name: 'Serge' };
};
module.exports = { fn };
