const sum = (num1, num2) => {
	let count = 0;
	let numbers = [num1];
	for (let i = 0; i < num2; i++) {
		if (i <= num2) {
			count++;
			numbers.push(count);
		}
	}
	return numbers.reduce((n, a) => n + a);

	console.log(numbers);
};

console.log(sum(0, -1));
