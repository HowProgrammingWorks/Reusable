'use strict';

const createUser =  (na, ci) => {
  const object = {
    name: na,
    city: ci
  };
  return object;
};

module.exports = { createUser };
