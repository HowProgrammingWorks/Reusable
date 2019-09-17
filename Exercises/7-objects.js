'use strict';

const fn = () => {
  const obj1 = { name };
  let obj2 = { name };
  obj1.name = 'Ivan';
  obj2.name = 'Sasha';
  /*obj1 = { name: 'Yurii' };
  так як obj1 об'явлено як const,
  то ми можемо змінювати поля obj1,
  але не можемо константному об'єкту
  присвоїти інше значення
  */
  obj2 = { name: 'Petro' };
};

module.exports = { fn };
