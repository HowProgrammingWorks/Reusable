'use strict';

const welcome = (person) => {
  console.log(`Ave, ${person.name}!`);
};

const persons = [
  { name: 'Marcus Aurelius' },
  { name: 'Mao Zedong' },
  { name: 'Rene Descartes' },
];

for (const person of persons) {
  welcome(person);
}
