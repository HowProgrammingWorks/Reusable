'use strict';

const createUser = (name, city) => {
  const newUser = { name, city };
  return newUser;
};
module.exports = { createUser };
