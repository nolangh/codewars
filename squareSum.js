function squareSum(num) {
	const squaredArray = num.map((x) => Math.pow(x, 2));
	if (num.length == 0) {
		return 0;
	} else {
		const sum = (number, total) => total + number;
		return squaredArray.reduce(sum);
	}
}

console.log(squareSum([0, 3, 4, 5]));
