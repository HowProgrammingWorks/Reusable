'use strict';

const fn = () => {
  let objectLet = { name: 'Vladimir' };
  const objectConst = { name: 'Vladimir' };
  objectLet.name = 'Sergey';
  objectConst.name = 'Sergey';
  const object = { name: 'Timur' };
  objectLet = object;
  //objectConst = object; - TypeError: Assignment to constant variable
};

fn();

module.exports = { fn };
