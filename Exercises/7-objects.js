'use strict';

const fn = () => {
  const a = { name: 'Mass' };
  let b = {name: null}; 
  a.name = 'Robo';
  b.name = 'Auto';
  //a = {name: 'Top', dot: 'Mass'};
  b = {name: 'Top', dot: 'Mass'}; // Переменной можно любое значение
};

fn();

module.exports = { fn };
