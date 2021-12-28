'use strict';

const fn = () => {
  let objectLet = { name: 'Vladislav' };
  const objectConst = { name: 'Vladislav' };
  objectLet.name = 'Erik';
  objectConst.name = 'Erik';
  const obj = { name: 'Danil' };
  objectLet = obj;
  ////objectConst = obj; - TypeError: Assignment to constant variable
};
fn();
module.exports = { fn };
