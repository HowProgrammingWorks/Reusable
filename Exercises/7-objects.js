'use strict';

const fn = () => {
    const objConst = { name: 'Constant Object//' };
  
    let objVar = { name: 'Variable Object' };
  
    objConst.name = 'New Constant Object';
    objVar.name = 'New Variable Object';
  
    
    
    objVar = { name: 'Another Variable Object' };
  
    
    console.log(objConst);
    console.log(objVar);
  };

module.exports = { fn };
