'use strict';

const phonebook = { Alex: { phone: '+79023453356' },
  Will: { phone: '+77904845678' },
  Bill: { phone: '+89083456787' },
  Dill: { phone: '+99018978675' },
  Nill: { phone: '+09048598989' },
};

const findPhoneByName = n => phonebook[n].phone;

module.exports = { phonebook, findPhoneByName };
