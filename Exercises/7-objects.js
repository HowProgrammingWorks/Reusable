'use strict';

const fn = () => {
  const obj = { name: '' };
  let obj2 = { name: '' };
  obj.name = 'some';
  obj2.name = 'some';
  obj2 = { otherObj: '' };
  console.log(obj, obj2, 'fn is called');
};

module.exports = { fn };
