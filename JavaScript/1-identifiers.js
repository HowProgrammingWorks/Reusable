'use strict';

let name = 'Arthur';
const year = 1989;

const salutation = name => console.log(`Hello ${name}!`);

salutation('Arthur');
salutation(name);
salutation(year);
