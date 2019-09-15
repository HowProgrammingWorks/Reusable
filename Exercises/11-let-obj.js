'use strict';

let obj = {
  name: 'Andrey',
};
obj.name = 'Marcus';
obj = {};//let позволяет переприсваивать значение, в отличии от const.

module.exports = { obj };
