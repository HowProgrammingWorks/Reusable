'use strict';

const fn = () => {
  const obj1 = { name: 'Jmih' };
  let obj2 = { name: 'Urich' };
  const obj3 = { mask: 'NT-200' };

  obj1.name = 'Shpack';
  obj2.name = 'Seryoja';
  //obj1 = obj3; //obj1 assigned as a constant
  obj2 = obj3;
};

module.exports = { fn };
