'use strict';

const fn = () => {
  const obj1 = { name: 'Obj name 1' };
  let obj2 = { name: 'Obj name 2' };

  obj1.name = 'Changed name 1';
  obj2.name = 'Changed name 2';

  obj2 = { name: 'Replaced name' };
};

module.exports = { fn };
