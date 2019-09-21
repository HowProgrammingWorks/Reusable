'use strict';

const fn = () => {
  const user1 = { name: 'Alex' };
  let user2 = { name: 'Bob' };

  user1.name = 'Ann';
  user2.name = 'Max';

  // user1 = { name: 'Ann' };
  // It cause an Runtime Exception, because const variable cannot be changed
  user2 = { name: 'Richard' };
};

module.exports = { fn };
