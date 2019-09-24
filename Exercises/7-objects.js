'use strict';

const fn = () => {
  const obj1 = { name: 'Max' };
  let obj2 = { name: 'Tom' };

  obj1.name = 'Jack';
  obj2.name = 'Garry';

  // obj1 = { name: 'Eli' }; Константе нельзя присвоить ссылку на другой объект
  obj2 = { name: 'Sunny' };
};

module.exports = { fn };
