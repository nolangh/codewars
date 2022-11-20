function isValidWalk(walk) {
	let ns = 0;
	let ew = 0;
	if (walk.length > 10) {
		return false;
	} else if (walk.length === 10) {
		for (let i in walk) {
			switch (i) {
				case "n":
					ns += 1;
					break;
				case "s":
					ns -= 1;
					break;
				case "e":
					ew += 1;
					break;
				case "w":
					ew -= 1;
					break;
			}
		}
	} else return false;
	return ns === 0 && ew === 0;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
