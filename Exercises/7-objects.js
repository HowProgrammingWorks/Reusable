'use strict';

const fn = () => {
  let obj = { name: 'name' };
  const obj2 = { name: 'name' };

  obj.name = 'pavel';
  obj2.name = 'pavel';

  const obj3 = { name: 'Sergey' };
  obj = obj3;
};

module.exports = { fn };
