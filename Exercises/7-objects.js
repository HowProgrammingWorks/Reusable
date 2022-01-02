'use strict';

const fn = () => {
  let obj1 = { name: 'Illia' };
  const obj2 = { name: 'Ivan' };
  obj1.name = 'wow';
  obj2.name = 'cccp';
  obj1 = { name: 'wonderful' };
};

module.exports = { fn };
