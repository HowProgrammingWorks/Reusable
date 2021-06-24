'use strict';

const fn = () => {
  const objOne = { name: 'One' };
  let objTwo = { name: 'Two' };
  objOne.name = 'something';
  objTwo.name = 'something too';
  //objOne = {other: 3} ;
  objTwo = { otherTwo: 2 };
  /*objOne - const => другой объект присвоить нельзя,
  изменять поля можно у обоих объектов*/
};
fn();
module.exports = { fn };
