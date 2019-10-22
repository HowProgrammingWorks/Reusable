/*
Inside the `fn` function ( 7-objects.js):
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name` of both objects.
- Try to assign other object to both identifiers.
- Explain script behaviour and submit only the working code.
*/

/* точно минимальная длина - 150 символов?
это же зависит от длины имени
*/

'use strict';

const fn = () => {
  const obj1 = { name: 'Anna' };
  let obj2 = { name: 'Vasiliy' };
  obj1.name = 'annananana';
  obj2.name = 'vasiliy';
  obj2 = { age: 15 };
};

module.exports = { fn };
