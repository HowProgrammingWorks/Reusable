'use strict';

const fn = () => {
  const user = { name: 'Vasya' };
  let user2 = { name: 'Vasisualiy' };
  // we can change the properties of all objects
  user.name = 'Vanya';
  user2.name = 'Ivanishvily';
  // we can not change const objects
  // user = {};
  user2 = {};
};

module.exports = { fn };
