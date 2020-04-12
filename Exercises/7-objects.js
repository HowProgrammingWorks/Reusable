'use strict';

const fn = () => {
  const obj1 = { name: 'obj1' };
  let obj2 = { name: 'obj2' };
  obj1.name = 'Change value in obj1';
  obj2.name = 'Change value in obj2';
  // obj1 = { name: 'Other value obj1' };
  obj2 = { name: 'Other value obj2' };
};

module.exports = { fn };
