/* Returns a data array; Data array has inner arrays as elements. 
   Its inner arrays have randomly generated boolean values inside them. 
   The lengths of the data array and its elements are set as inner parameters*/

export const DataArray = () => {
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
