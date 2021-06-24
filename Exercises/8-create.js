'use strict';

const createUser = (name, city) => {
  const obj = {
    name,
    city
  };
  return obj;
};

console.log(createUser('Marcus Aurelius', 'Roma'));

module.exports = { createUser };
