'use strict';

const createUser = (name, city) => {
  const user = {
  name: name,
  city: city
  };
  return user;
};

module.exports = { createUser };
