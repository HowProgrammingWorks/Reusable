'use strict';

const object1 = {
  name: 'Marcus Aurelius'
};
let object2 = {
  name: 'Antoninus Pius'
};

object1.name = 'Octavianus Augustus';
object2.name = 'Octavianus Augustus';

//object1 = { name: 'Tiberius Claudius' };
object2 = {
  name: 'Caligula'
};

const createUser = (name, city) => ({
  name,
  city
});
