'use strict';

const fn = () => {
  const obj1 = { name: 'Julius' };
  let obj2 = { name: 'Julius' };

  obj1.name = 'Caesar';
  obj2.name = 'Caesar';

  obj2 = { name: 'Julius Caesar' };
};

module.exports = { fn };
