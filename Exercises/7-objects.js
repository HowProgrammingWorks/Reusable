'use strict';

const fn = () => {
  const obj1 = { name: 'Volodymyr' };
  let obj2 = { name: 'Vadym' };

  obj1.name = 'Dmytro';
  obj2.name = 'Timur';

  //Object1 = { name: 'Yehor' }; //Error: const cannot be changed
  obj2 = { name: 'Artem' };
};

module.exports = { fn };
