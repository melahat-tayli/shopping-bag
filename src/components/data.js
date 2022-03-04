/* Returns a data array; data array has inner arrays as elements. 
   Its inner arrays have randomly generated boolean values inside them. 
   The lengths of the data array and its elements are set as inner parameters.
   Example: if lengthData=3 and lengtgDataElements=4, then a randomly generated dataArray could be dataArray=[[true, false, true, true],[false, false, true, true], [false, true,false, true]]
   This data array is used to determine the amount of shopping bag items. Example: if there is 4 true, then 4 will be the amount of the shopping item at the corresponding index
   */

export const dataArray = () => {
  let myChoices = [true, false];
  let lengthDataElements = 10;
  let lengthData = 5;
  let data = [];

  for (let i = 0; i < lengthData; i++) {
    data.push([]);
    for (let j = 0; j < lengthDataElements; j++) {
      data[i].push(myChoices[Math.floor(Math.random() * myChoices.length)]);
    }
  }
  return data;
};
