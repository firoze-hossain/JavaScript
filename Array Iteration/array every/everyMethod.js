//every() method checks all the array values pass a test
const nums = [2, 12, 19, 41, 5, 45];
let checkOver18 = nums.every(everyFunction);
console.log("Check over 18: " + checkOver18);
function everyFunction(value) {
  return value > 18;
}
function everyFunction(value, index, array) {
  return value > 18;
}
