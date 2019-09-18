'use strict';

const fn = () => {
  const simon = { name: 'Simon Stalenhag' };
  let ethan = { name: 'Ethan Brown' };
  ethan.name = 'Brown';
  /*Изменить значение const нельзя, так как посредством const создается
  идентификатор, с которым связано неизменяемое значение и тип*/
};

module.exports = { fn };
