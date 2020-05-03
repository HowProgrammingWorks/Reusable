"use strict";

let phonebook = [
  { name: "Vitalik", phone: "1234" },
  { name: "Oleg", phone: "4321" },
];

const findPhoneByName = (name) => {
  for (const x of phonebook) {
    if (x.name === name) { return x.phone; 
    }
  }
};
findPhoneByName("Vitalik");
module.exports = { phonebook, findPhoneByName };
