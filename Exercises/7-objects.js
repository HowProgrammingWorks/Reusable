'use strict';

const fn = () => {
  const a = { name: 'shydla' };
  let b = { name: 'shudla' };
  a.name = 'gggggg';
  b.name = 'ffffff';
  /* a = { size: 0 }; object a is constant, so it is not mutable */
  b = { size: 0 };
};

module.exports = { fn };
