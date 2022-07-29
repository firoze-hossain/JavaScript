//some() method checks if some array values pass a test
const numbers = [1, 23, 9, 7, 8, 12];
let someOver18 = numbers.some(someFunction);
console.log("Values over than 18: " + someOver18);
function someFunction(value) {
  return value > 18;
}
function someFunction(value, index, array) {
  return value > 18;
}
