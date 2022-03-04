import { ShoppingList } from "./shoppingList.js";
import { dataArray } from "./data.js";

/*Returns an array whose elements are javascript objects Number of these javascript objects( dictionaries) should be same with the length of the data. 
  These objects contain the name of the shoppingList elements and amount of them. 
  The amounts of the shoppingList elements are determined by the total number of 'True' s in the dataArrays corresponding elements.
  Example: bag = [{item:'banana', amount:3}, {item:'tomato', 'amount':4}]
*/
export const MyBag = () => {
  let data = dataArray();
  let lengthData = data.length;
  let bag = [];

  for (let i = 0; i < lengthData; i++) {
    bag.push({});
    bag[i].item = ShoppingList[i];
    bag[i].amount = data[i].reduce((total, number) => {
      return total + number;
    });
  }
  return bag;
};
