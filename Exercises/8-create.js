'use strict';

const createUser = (name, city) => {
  const Person = { name, city };
  return Person;
};


module.exports = { createUser };
