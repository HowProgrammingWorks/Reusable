'use strict';

const createUser = function (name, city) {
  const obj = {};
  obj.name = name;
  obj.city = city;
  return obj;
};

module.exports = { createUser };
