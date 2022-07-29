//find() method returns the first array element which pass by test function
const numbers = [5, 21, 87, 14, 3];
let findOver18 = numbers.find(findFunction);
console.log("Value over 18: " + findOver18);
function findFunction(value) {
  return value > 18;
}
function findFunction(value, index, array) {
  return value > 18;
}
