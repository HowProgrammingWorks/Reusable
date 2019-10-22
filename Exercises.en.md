# Exercises

## Identifiers

1. Define variable to store your name as a string.
2. Define constant to store your birth year as a number.
3. Prepare function to print greeting with single argument.

## Loops

4. Implement function `range(start: number, end: number): array` returning
array with all numbers from the range [15, 30] including endpoints.
5. Implement function `rangeOdd(start: number, end: number)` returning
array with all odd numbers from the range [15, 30] including endpoints.

## Functions

6. Call function from function in loop
- Implement function `average` with signature
`average(a: number, b: number): number` calculating average (arithmetic mean).
- Implement function `square` with signature
`square(x: number): number` calculating square of x.
- Implement function `cube` with signature
`cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results to function `average`
on each iteration. Add calculation results to array and return this array from
function `calculate`.

Call functions `square` and `cube` in loop, then pass their results to
function `average`. Print what `average` returns.

## Objects

7. Define constant object with single field `name`.
8. Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour.
9. Implement function `createUser` with signature
`createUser(name: string, city: string): object`. Example:
`createUser('Marcus Aurelius', 'Roma')` will return object
`{ name: 'Marcus Aurelius', city: 'Roma' }`

## Collections: Array

10. Define array of objects with two fields: `name` and `phone` (phone book).
Example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
11. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search.

## Collections: Hash (Object)

12. Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
13. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone.
