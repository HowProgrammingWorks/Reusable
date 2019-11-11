'use strict';

const createUser = (name, city) => {
  const user = { name, city };
  return user;
};

module.exports = { createUser };
