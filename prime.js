const isPrime = (num) => {
	if (num <= 1) {
		return false;
	} else if (num / 1 == num && num / num == 1) {
		return true;
	} else {
		return false;
	}
};

console.log(isPrime(36));
