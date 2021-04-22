'use strict';

const createUser = (name, city) => ({ name, city });

console.log(createUser('John Dou', 'Rome'));


module.exports = { createUser };
