'use strict';

const fn = () => {
  const kek = { name: 'mich' };
  let lol = {
    name: 'lyalya',
  };
  kek.name = 'dada';
  lol.name = 'xoxoox';
  console.log(kek.name);
  console.log(lol.name);
  lol = { dada: 'asdsadsad' };
};

fn();

module.exports = { fn };
