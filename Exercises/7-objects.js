'use strict';

const fn = () => {
  const obj1 = { name: 'Petr' };
  let obj2 = { name: 'Petr' };

  obj1.name = 'Vasyl';
  obj2.name = 'Vasyl';

  const obj = { name: 'Petr Protopopov' };
  obj2.name = obj.name;
};

module.exports = { fn };
