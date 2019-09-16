({
  name: 'createUser',
  length: [30, 100],
  cases: [
    ['Marcus', 'Roma', { name: 'Marcus', city: 'Roma' }],
  ],
  test: createUser => {
    const user = createUser('Marcus', 'Roma');
    const keys = Object.keys(user);
    if (!keys.includes('name')) throw new Error('Field name is not found');
    if (!keys.includes('city')) throw new Error('Field city is not found');
    if (keys.length !== 2) throw new Error('More than two fields in object');
  }
})
