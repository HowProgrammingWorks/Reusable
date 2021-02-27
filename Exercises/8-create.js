'use strict';

const createUser = (name, city) => {
  const user = {};
  user.name = name;
  user.city = city;
  return user;
};

module.exports = { createUser };
