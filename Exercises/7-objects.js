'use strict';

const fn = () => {
  const firstPerson = { name: 'Tim' };
  let secondPerson = { name: 'Tom' };
  firstPerson.name = 'Tom';
  secondPerson.name = 'Tim';
  /*firstPerson = { name: 'Tim' };
  ->Error
  */
  secondPerson = { name: 'Tom' };
};

module.exports = { fn };

