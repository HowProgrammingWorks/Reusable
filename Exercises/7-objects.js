'use strict';

const fn = null;
const first = { name: 'tim' };
let sec = { name: 'tom' };
first.name = 'tom';
sec.name = 'tim';
console.dir(first);
console.dir(sec);
//first = { suname: 'gg' };
sec = { suname: 'hh' };
console.dir(sec);
module.exports = { fn };
