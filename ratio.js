const plusMinus = (arr) => {
	let pos = 0;
	let neg = 0;
	let zero = 0;

	for (let i of arr) {
		if (i > 0) {
			pos++;
		} else if (i < 0) {
			neg++;
		} else {
			zero++;
		}
	}
	return [pos / arr.length, neg / arr.length, zero / arr.length];
};

console.log(plusMinus([-1, 2, 3, 0, 6, 0, 7]));
