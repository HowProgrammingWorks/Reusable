'use strict';

const fn = () => {

  const obiekt1 = { name: 'AAA', };
  let obiekt2 = { name: 'BBB', };

  obiekt1.name = 'TTT';
  obiekt2.name = 'CCC';
  obiekt2 = { name: 'LLL', age: 10 };
};

module.exports = { fn };
