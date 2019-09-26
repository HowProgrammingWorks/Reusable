/*
Implement function `createUser` with signature
`createUser(name: string, city: string): object`. Example:
`createUser('Marcus Aurelius', 'Roma')` will return object
`{ name: 'Marcus Aurelius', city: 'Roma' }`
*/

'use strict';

const createUser = (name, city) => ({ name, city });

module.exports = { createUser };
