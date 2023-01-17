'use strict';

const fn = () => {
  const male = { name: undefined };
  let female = null;
  male.name = 'Tima';
  female = { name: undefined };
  female.name = 'Tima';
  console.log(male !== female);
};

module.exports = { fn };
