'use strict';

const fn = () => {
  let obj = { name: '' };
  const obj1 = { name: '' };
  obj1.name = 'Andrei';
  console.dir(obj1);
  obj = obj1;
  console.dir(obj);
  obj.name = 'Marcus';
  console.dir(obj1);
  console.dir(obj);
};

module.exports = { fn };
