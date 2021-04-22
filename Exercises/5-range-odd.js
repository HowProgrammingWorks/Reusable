'use strict';

const rangeOdd = (start, end) => {
	let arr = [];

	for(let i=start; i<=end; ++i)
		if((Math.abs(i)%2) === 1)
			arr.push(i);

	return arr;
};

module.exports = { rangeOdd };
