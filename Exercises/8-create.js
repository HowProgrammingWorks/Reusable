'use strict';

const createUser = (name, city) => {
  const obj = {
    name,
    city,
  };
  return obj;
};
createUser('Mark', 'Brody');
module.exports = { createUser };
