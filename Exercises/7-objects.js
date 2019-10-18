'use strict';

const fn = () => {
  const obj1 = { name: 'Marcus Aurelius' };

  let obj2 = { name: 'Mao Zedong' };

  obj1.name = 'Ivan Opara';
  obj2.name = 'Ivan Opara';

  obj2 = obj1;

};

module.exports = { fn };
