'use strict';

const persons = {
  marcus: { name: 'Marcus Aurelius', phone: '+380554433' },
  mao: { name: 'Mao Zedong', phone: '+38544444' },
  rene: { name: 'Rene Descartes', phone: '+38011111' },
};

const findByName = name => {
  console.log(name+'\'s phone number is ' + persons[name].phone);
};
findByName('marcus');

findByName('rene');
