"use strict";

const createUser = (name, city) => {
  let obj = { name: name, city: city };
  return obj;
};
createUser("Mark", "Brody");
module.exports = { createUser };
