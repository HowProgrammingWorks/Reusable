'use strict';

const fn = () => {
  const PERSON = {
    name: 'Igor',
  };
  let person = {
    name: 'Jhon',
  };
  PERSON.name = '';
  person.name = '  ';
  //PERSON = {}; записать в константу другое значение нельзя
  person = {};
};

module.exports = { fn };
