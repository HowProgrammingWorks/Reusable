'use strict';

const createUser = (name1, city1) => {
  const obj = { name: name1, city: city1 };
  return obj;
};

console.dir(createUser('marc', 'aur'));

module.exports = { createUser };
