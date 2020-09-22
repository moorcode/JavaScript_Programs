// CHALLENGE 2
// Write some code that takes an array of words and turns them into an array of the same words in the opposite order.

// Initialize a relevant variable name to an array with zero or more elements.
let needReverse = ["Here", "are", "the", "words", "to", "be", "reversed"]
console.log(needReverse)
/* Loop through array; starting at the last element; stepping to and including 0; one reverse step at a time. */
for (i = needReverse.length - 1; i <= needReverse.length - 1 && i >= 0; i--){
// Initialize a relevant variable to an empty array
  let doneReverse = []
// For each loop, add the element to the empty array.
  doneReverse = doneReverse += needReverse[i]
  console.log(doneReverse)
  }
