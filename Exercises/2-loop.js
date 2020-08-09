'use strict';
for (let i = 15; i <= 30; i++) {
    if (i % 2 !== 0)
        console.log(i);
}

const range = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0)
            console.log(i);
    }
};

range(15, 30);
