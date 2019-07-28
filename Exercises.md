# Exercises

## Identifiers

1. Define varible to store your name.
2. Define constant to store your birth year.
3. Prepare function to print greeting with single argument.
4. Call function passing value.
5. Call function passing variable.

## Loop

1. Print all odd numbers from the range [15, 30] including endpoints.
2. Implement function `range(start: number, end: number)` doing the same task.

## Function

1. Implement function `average` with signature
`average(a: number, b: number): number` calculating average (arithmetic mean).
2. Implement function `square`  with signature
`square(x: number): number` calculating square of x.
3. Implement function `cube`  with signature
`cube(x: number): number` calculating cube of x.
4. Call functions `square` and `cube` in loop, tnen pass their results to
function `average`. Print what `average` returns.

## Object

1. Define constant object with single field `name`.
2. Define variable object with single field `name`.
3. Try to change field `name` and assign other object to both identifiers.
Explain script behaviour.
4. Implement function `createUser` with signature
`createUser(name: string, city: string): object`. For example:
`createUser('Marcus Aurelius', 'Roma')` will return
`{ name: 'Marcus Aurelius', city: 'Roma' }`

## Array

1. Define array of objects with two fields: `name` and `phone` (phone book).
For example: `{ name: 'Marcus Aurelius', phone: '+380445555555' }`.
2. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals aursument `name`. Use `for` loop for this search.

## Hash

1. Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
2. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone.
