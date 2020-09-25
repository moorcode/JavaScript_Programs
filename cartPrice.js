// CHALLENGE 3
// Thinkful Take-home quiz
/* Objective: Create a function to find the total cost of all the items in the list. 
The function should accept the array of items and return the total cost of the items as a number. */

let items = [
  {
    itemName: "Effective Programming Habits",
    type: "book",
    price: 13.99
  },
  {
    itemName: "Creation 3005",
    type: "computer",
    price: 299.99
  },
  {
    itemName: "Finding Your Center",
    type: "book",
    price: 15.00
  }
]

function cartPrice(array) {
  let total = 0
  for(i = 0; i < array.length; i++) {
    let price = array[i].price
    total += price
  }
  return total
}
