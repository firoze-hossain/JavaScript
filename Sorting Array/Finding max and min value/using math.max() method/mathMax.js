//finding whole array is very inneficient to find max and min value
//use Math.max.apply() method to find highest value
const value = [6, 58, 85, 74, 36, 74];
console.log("Values are: " + value);
function maxValue(x) {
  return Math.max.apply(null, x);
}
let highestValue = maxValue(value);
console.log("Max value is: " + highestValue);
