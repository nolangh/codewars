/*square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

function square(num) {
  let splitDigits = [...(num + "")].map((n) => +n); // ["1","2","3"] then revert it back to numbers [1,2,3]
  for (let i of splitDigits) {
    return i.square;
  }
}
