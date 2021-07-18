/*
The goal of this exercise is to convert a string to a new string where each character in the new string is 
"(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
NOTE -- example of results
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word) {
  word = word.toLowerCase();
  let encoded = "";
  for (let i of word) {
    if (word.indexOf(i) === word.lastIndexOf(i)) {
      encoded += "(";
    } else {
      encoded += ")";
    }
  }
  return encoded;
}

const test = duplicateEncode("Success"); // ")())())"
console.log(test);
