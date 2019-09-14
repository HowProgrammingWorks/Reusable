'use strict';
// Идентификаторы

let name = 'Evgeniy';

const BIRTHDAY = 1984;

let printName = name => console.log('Hello ' + name);

printName('Evgeniy');

printName(name);

printName(BIRTHDAY);

// Циклы

for (let i = 15; i <= 30; i += 2) {
  console.log(i);
}
console.log('function range');
let range = (start, end) => {
  if (start % 2 === 0) start += 1;
  for (start; start <= end; start += 2) {
    console.log(start);
  }
  return;
};
range(12, 30);

// Функции

console.log('function');

let average = (a, b) => (a + b) / 2;

let squere = a => a * a;

let cube = a => a * a * a;

for (let i = 0; i <= 5; i++) {
  console.log(average(squere(i), cube(i)));
}

// Объекты

const PERSON = {
  name: 'Andre',
};

let person = {
  name: 'Andre',
};

PERSON.name = 'Roma';
person.name = 'Oleg';

PERSON = {};

person = {};

//Константе нельзя присвоить новый объект, переменной можно.

let createUser = (name, city) => (
  {
    name,
    city,
  }
);

// Массивы

let telephoneBook = [
  {
    name: 'Stas',
    phone: '+7-922-333-33-33',
  },
  {
    name: 'Boris',
    phone: '+7-933-222-22-22',
  }
];

let findPhoneByName = name => {
  for (const value of telephoneBook) {
    if (value.name === name) console.log(value.phone);
  }
};

// Коллекции: хеш-таблицы

let hash = {
  'Stas': '+7-922-333-33-33',
  'Boris': '+7-933-222-22-22',
};

let findPhoneByNameHash = name => {
  for (const key in hash) {
    if (key === name) return console.log(hash[key]);
  }
};





