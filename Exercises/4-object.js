'use strict';
const obj1 = {
    name: 'obj1Name',
};

let obj2 = {
    name: 'obj2Name',
};

obj1.name = 'vasya';
obj2.name = 'petya';

// obj1 = {
//     age: 27,     error
// };

obj2 = {
    age: 54,
};

const createUser = (name, city) => {
    const user = {
        name,
        city,
    };

    return user;
};

console.log(createUser('Marcus', 'Rome'));
