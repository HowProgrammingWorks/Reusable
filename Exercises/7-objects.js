'use strict';

const fn = () => {
  const obj1 = { name: 'Michael' };
  let obj2 = { name: 'Michael' };

  obj1.name = 'Michael2';
  obj2.name = 'Michael2';

  obj2 = { name: 'Marcus Aurelius' };
};

module.exports = { fn };
