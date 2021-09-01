'use strict';

const welcome = (person) => {
  console.log(`Ave, ${person.name}!`);
};

const persons = {
  marcus: { name: 'Marcus Aurelius' },
  mao: { name: 'Mao Zedong' },
  rene: { name: 'Rene Descartes' },
};

for (const name in persons) {
  const person = persons[name];
  welcome(person);
}
