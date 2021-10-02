'use strict';

const fn = () => {
  const person = { name: 'Alex' };
  // let secondPerson = { name: 'Boris' };
  const secondPerson = { name: 'Boris' };

  person.name = 'Jake';
  secondPerson.name = 'Oleg';
};

module.exports = { fn };
