'use strict';

const test = { name: 'dan' };
let test2 = { name: 'ada' };

test.name = 'rex';
test2.name = 'odo';

const createUser = (name, city) => {
  const user = {
    name,
    city,
  };

  return user;
};

console.log(createUser('dan', 'zu'));
