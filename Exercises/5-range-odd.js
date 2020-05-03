'use strict';

const rangeOdd = (start, end) => {
    for( let i = start; i <= end; i++) {
       ( i % 2 === 1 ) ?  i : false;
    }
    };
    rangeOdd(15,30);

module.exports = { rangeOdd };
