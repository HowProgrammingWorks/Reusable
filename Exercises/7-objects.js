'use strict';

const fn = () => {
  const constObj = { name: 'Mira' };
  let letObj = { name: 'Mira' };

  constObj.name = 'Marco';
  letObj.name = 'Alex';

  //this assignment won't work because const reference can't be changed.
  //constObj = {};
  letObj = {};
};

module.exports = { fn };
