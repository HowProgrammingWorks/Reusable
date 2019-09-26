'use strict';

const fn = () => {
  const user = {
    name: 'Oleg'
  };

  let user1 = {
    name: 'Oleg'
  };

  user.name = 'OLEG';
  user1.name = 'OLEG';

  user1 = {};
};

module.exports = { fn };
