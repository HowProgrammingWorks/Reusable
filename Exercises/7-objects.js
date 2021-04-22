'use strict';

const fn = () => {
  const name1 = { name: 'John' };
  let name2 = { name: 'John' };

  name1.name = 'Dou';
  name2.name = 'Dou';

  name2 = { name: 'John Dou' };
};



module.exports = { fn };
