'use strict';

const fn = ()=>{
    const a1 = {name:'Nah huh'};
    let a2 = {name:'Bruh uh'};

    a1.name = "Kevin"; 
    a2.name = "George"; 

    //a1 = {};
    a2 = {};
};

fn();

module.exports = { fn };
