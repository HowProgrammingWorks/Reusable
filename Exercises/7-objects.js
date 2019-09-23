'use strict';

const fn = () => {
  const obj = { name: 'me'};
  let vobj = { name: 'You'};
  obj.name = 'cool';
  vobj.name = 'cool';
  console.dir(obj);
  console.dir(vobj);
//  obj = {surname: ' not Ok'};
  vobj = {surname: 'Ok'};
};


module.exports = { fn };
