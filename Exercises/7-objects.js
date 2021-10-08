'use strict';

const fn = () => {
  const object1 = { name: 'Yarik' };
  let object2 = { name: 'Bodya' };
  object1.name = 'Bodya';
  object2.name = 'Yarik';
  //object1 = { name: 'Vanya' };
  object2 = { name: 'Andriy' };
};

module.exports = { fn };
