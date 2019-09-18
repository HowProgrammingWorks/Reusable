'use strict';

const fn = () => {
  const obj = {
    name: 'Alice',
  };
  let anotherObj = {
    name: 'Alice',
  };
  obj.name = 'Bob';
  anotherObj.name = 'John';
  anotherObj = {
    name: 'Eve',
  };
};

module.exports = { fn };
