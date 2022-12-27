'use strict';

const fn = () => {
  const obj = { name: 'something' };
  let  obj1 = { name: 'smth else' };
  obj.name = 'another smth';
  obj1 = { lastname: 'another smth else :)' };
  console.dir(obj);
  console.dir(obj1);

};

module.exports = { fn };
