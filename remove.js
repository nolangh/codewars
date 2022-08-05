const firstAndLast = (string) => {
	console.log(string);
	if (string.length <= 2) {
		return string;
	} else {
		return string.slice(1, -1);
	}
};
