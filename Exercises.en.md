# Exercises

## Identifiers

1. Define variable to store your name as a string.
2. Define constant to store your birth year as a number.
3. Prepare function to print greeting with single argument.

## Loop

4. Print all odd numbers from the range [15, 30] including endpoints.
5. Implement function `range(start: number, end: number)` doing the same task.

## Function

6. Implement function `average` with signature
`average(a: number, b: number): number` calculating average (arithmetic mean).
7. Implement function `square` with signature
`square(x: number): number` calculating square of x.
8. Implement function `cube` with signature
`cube(x: number): number` calculating cube of x.
9. Call functions `square` and `cube` in loop, then pass their results to
function `average`. Print what `average` returns.

## Object

10. Define constant object with single field `name`.
11. Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour.
12. Implement function `createUser` with signature
`createUser(name: string, city: string): object`. Example:
`createUser('Marcus Aurelius', 'Roma')` will return object
`{ name: 'Marcus Aurelius', city: 'Roma' }`

## Collections: Array

13. Define array of objects with two fields: `name` and `phone` (phone book).
Example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
14. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search.

## Collections: Hash (Object)

15. Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
16. Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone.
