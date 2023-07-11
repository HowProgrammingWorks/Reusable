'use strict';

const fn = () => {
  const name = 'ssdf';
  const obj1 = { name };
  obj1.name = 'dsfdsfds';
  let obj2 = { name };
  obj2 = 'sgfsdgfs';

  return { obj1, obj2 };
};

module.exports = { fn };
