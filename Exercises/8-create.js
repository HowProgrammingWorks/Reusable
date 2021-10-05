'use strict';

const createUser = (name, city) => {
 const obj = {
  'name' :name,
  'city' :city
 };
  return obj;
};

module.exports = { createUser };
