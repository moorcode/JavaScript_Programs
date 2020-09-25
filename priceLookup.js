// CHALLENGE 5
// Thinkful Take-home Quiz
/* Objective: Create a function to find the price of a single item. 
The function should accept the array of items and an item name (string) as parameters, 
and return the price of the item with that name. If the item cannot be found, 
return the string "No item found with that name". */

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

function priceLookup(array, item) {
  
  let itemPrice = null 
  for(i = 0; i < array.length; i++) {
    let itemName = array[i].itemName
    let price = array[i].price
    if(item === itemName) {
      itemPrice = price 
    }
  } 
  if(itemPrice===null){
      return "No item found with that name"
    }
  return itemPrice
}
