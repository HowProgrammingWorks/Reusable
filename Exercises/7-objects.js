'use strict';

const fn = () => {
  const objConstant = { name: 'constant' };
  let objVariable = { name: 'variable' };
  objConstant.name = 'changedConstant';
  objVariable.name = 'changedVariable';
  objVariable = { age: 7 };
};

module.exports = { fn };
