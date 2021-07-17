function comp(array1, array2) {
  let reducedArray = array2
    .sort((a, b) => a - b)
    .forEach((element) => Math.sqrt(element));
  //let sorted1 = array1.sort((a, b) => a - b);
}

const a1 = [3, 4, 0, 0, 6, 1, 1, 1, 9, 5, 6];
const a2 = [36, 0, 9, 16, 1, 81, 25, 1, 36, 1, 0];
const test = comp(a1, a2);
console.log(test);

function comp(array1, array2) {
  array1.forEach(function (element) {});
}
