'use strict';

const obj = {
  name: 'Andrey',
};

obj.name = 'Marcus';// Изменяется непосредственно сам объект,а не переменная.
obj = {};// Error: Нельзя переприсваивать значение заданнное через const

module.exports = { obj };
