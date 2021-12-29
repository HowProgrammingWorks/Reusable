'use strict';

const fn = () => {
  const constObj = { name: 'constObj' };
  let letObj = { name: 'letObj' };

  constObj.name = 'new constObj';
  letObj.name = 'new letObj';

  const obj = {};
  letObj = obj;

};

module.exports = { fn };
