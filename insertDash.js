// CHALLENGE 1
//Write some code that inserts a dash between each character of a string.

// Initialize a relevant variable name to a string with zero or more given characters.
let needDash = "This is a string of characters."
console.log(needDash)
// Loop through given string; starting at the first character; up to and including the last character; one step at a time.
for(i = 0; i < needDash.length; i++){
// Initialize a relevant variable to an empty string.
  let doneDash = ""
// For each loop, append a dash to the character at that index except the last character
  if(i < needDash.length - 1){
    doneDash = needDash.charAt(i) + "-"
    console.log(doneDash)
  }
  else{
    console.log(needDash.charAt(i))
  }
}
