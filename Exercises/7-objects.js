'use strict';

const fn = () => {
  const obj1 = { name };
  let obj2 = { name };
  obj1.name = 'pavlo';
  obj2.name = 'paul';
  // obj1 = { name: 'dima' };
  obj2 = { name: 'dima' };
};
module.exports = { fn };
