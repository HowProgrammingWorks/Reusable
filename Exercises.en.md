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

7. Inside the `fn` function ( 7-objects.js):
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name` of both objects.
- Try to assign other object to both identifiers.
- Explain script behaviour and submit only the working code.

8. Implement function `createUser` with signature
`createUser(name: string, city: string): object`. Example:
`createUser('Marcus Aurelius', 'Roma')` will return object
`{ name: 'Marcus Aurelius', city: 'Roma' }`

## Collections: Array

9. Implement a phonebook on an array of objects. 
- Define array of objects with two fields: `name` and `phone` (phone book).
Example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`. Add several 
objects to the array. 
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`, which returns phone number from that object
where field `name` equals argument `name`. Use `for` loop for this search.

## Collections: Hash (Object)

10. Implement a phonebook on a hash-table (dictionary).
- Define hash with `key` containing `name` (from previous example) and `value`
containing `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. The function should return phone number from hash/object.
Use `hash[key]` to find needed phone.
