'use strict';

const fn = () => {
  const obj1 =  { name: 'Dmytro' };
  let obj2 = { name: 'Violetta'};
  obj1.name = 'Vladislav';
  obj2.name = 'Sasha';
  obj2 = { name: 'Roman'};
};

module.exports = { fn };
