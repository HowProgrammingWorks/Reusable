'use strict';

const fn = () => {
  let o1 =  { name: 'Name' };
  const o2 = { name: 'Name2' };
  const dum = { name: 'Other' };
  o1.name = 'New Name';
  o2.name = 'New Name2';
  o1 = dum;
  //o2 = dum; //o2 is a constant
};

module.exports = { fn };
