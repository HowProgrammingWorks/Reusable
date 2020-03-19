'use strict';

const fn = () => {
  const object = { name: 'Kolyan' };
  let object2 = { name: 'Kolyan' };

  object2.name = 'Kolymba';
  object.name = 'Kolymba';

  object2 = {};
};


module.exports = { fn };
