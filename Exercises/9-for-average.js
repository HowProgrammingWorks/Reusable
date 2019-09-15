'use strict';

const { average } = require('./6-average');
const { square } = require('./7-square');
const { cube } = require('./8-cube');

const result = [];

for (let index = 0; index < 10; index++) {
  const sq = square(index);
  const cb = cube(index);
  result.push(average(sq, cb));
}

module.exports = { result };
