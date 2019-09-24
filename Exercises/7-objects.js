'use strict';

const fn = () => {
  const obj1 = {
    name: undefined,
  };
  let obj2 = {
    name: undefined,
  };

  obj1.name = 'Alex';
  obj2.name = 'Xela';

  obj2 = {
    name: 'Joe',
  };
  return { obj1, obj2 };
};

module.exports = { fn };
