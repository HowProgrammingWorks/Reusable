'use strict';

const createUser = (name, city) => {
  const obj = {
    name,
    city
  };
  return obj;
};

module.exports = { createUser };
