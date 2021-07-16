function countSheeps(arrayOfSheep) {
  let trueCount = 0;
  for (let i of arrayOfSheep) {
    if (i === true) trueCount += 1;
  }
  return `${trueCount}, "There are ${trueCount} sheeps in total"`;
}

const test = countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]); //should return 17
console.log(test);
