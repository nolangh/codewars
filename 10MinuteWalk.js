/*
NOTE [w,n,s,e]
NOTE array needs 10 items to return true
TODO return yes if walk is 10 minutes and returns to original spot
*/

function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  if(walk.length > 10){
      return false
  }
  if (walk.length === 10) {
    for (let i of walk) {
      if (i == 'n') ns += 1;
      if (i == 's') ns -= 1;
      if (i == 'e') ew += 1;
      if (i == 'w') ew -= 1;
    }
  }else
      return false;
      return 
}

const test = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]); //should return true
console.log(test);

/*
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')
!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false')
*/
