// CHALLENGE 4
// Thinkful Take-home Quiz
/* Objective: Create a function to find the most expensive item. 
The function should accept the array of items as a parameter and return the name of the most expensive item. */

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

function mostExpensiveItemName(array) {
  let mostExpensive = array[0]
  for(let itemObject of array) {
    let price = itemObject.price
    if(price>mostExpensive.price){
      mostExpensive = itemObject
    }
  }
  return mostExpensive.itemName
}
