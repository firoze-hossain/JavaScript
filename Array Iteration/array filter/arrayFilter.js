//filter() function creates new array that passes a test
//creates new array from elements with a value larger than 18
const nums = [2, 9, 18, 23, 77];
const overEighteen = nums.filter(filterFunction);
console.log("Value larger than 18 = " + overEighteen);
function filterFunction(value, index, array) {
  return value > 18;
}
