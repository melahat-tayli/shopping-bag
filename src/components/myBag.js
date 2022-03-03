import { ShoppingList } from "./shoppingList.js";
import { DataArray } from "./data.js";

/*Returns an array whose elements are javascript objects. 
  These objects contain the name of the shoppingList elements and amount of them. 
  The amounts of the shoppingList elements are determined by the total number of 'True' s in the dataArrays corresponding elements.
  Example: bag = [{item:'banana', amount:3}, {item:'tomato', 'amount':4}]
*/
export const MyBag = () => {
  let lengthData = 5;
  let bag = [];
  let data = DataArray();

  for (let i = 0; i < lengthData; i++) {
    bag.push({});
    bag[i].item = ShoppingList[i];
    bag[i].amount = data[i].reduce((total, number) => {
      return total + number;
    });
  }
  return bag;
};

// for loob yerine map dene
