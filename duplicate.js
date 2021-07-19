const { i } = require("mathjs");

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in the input string. The input string can be assumed
to contain only alphabets (both uppercase and lowercase) and numeric digits.

EXAMPLES -----
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
*/

/* NOTE try using .filter() to make an array of the values that repeat. then return the length of the new array */

function duplicateCount(text) {
  text = text.toLowerCase();
  let duplicate = {};
  for (let i = 0; i < text.length; i++) {
    let character = text.charAt(i);
    if (duplicate[character]) {
      duplicate[character]++;
    } else {
      duplicate[character] = 1;
    }
  }
  return duplicate;
}

const test = duplicateCount("aabbcde");
console.log(test);
