'use strict';

const fn = () => {
  let obj1 = { name: 'User1' };
  const obj2 = { name: 'User2' };
  obj1.name = 'User3';
  obj2.name = 'User4';
  obj1 = {};
  //obj2 = {}; нельзя переназначить константу
};

module.exports = { fn };
