"use strict";

const fn = () => {
  const obj1 = { name: "Vitalik" };
  let obj2 = { name: "Oleg" };
  obj1.name = "asdasd";
  obj2.name = "asdsa123";
  obj2 = { name: 50 };
  
};
fn();
module.exports = { fn };
