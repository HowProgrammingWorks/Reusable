'use strict';

const fn = () => {
  const obj1 = { name: 'Саша' };
  // eslint-disable-next-line prefer-const
  let obj2 = { name: 'Ксюша' };

  obj1.name = 'Александр';
  obj2.name = 'Ксения';

  obj2 = { name: 'Ксю' };
};

module.exports = { fn };
