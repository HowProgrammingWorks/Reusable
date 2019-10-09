'use strict';

const fn = () => {
  const obj1 = { name: undefined };
  let obj2 = { name: undefined };
  obj1.name = 'Test';
  obj2.name = 'Test';
  // obj1 = {newname: 'lol'};  obj1 it's constant that is why it can't changed
  obj2 = { newName: 'lol' };
  console.log('obj1', obj1);
  console.log('obj2', obj2);
};

module.exports = { fn };
