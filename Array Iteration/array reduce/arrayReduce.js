//reduce() runs a function on each array element to produce a single value
//it works from left to right
const numbers = [3, 5, 12, 10, 25];
let sum = numbers.reduce(reduceFunction);
console.log("The sum of array elements: " + sum);

// function reduceFunction(total, value) {
//   return total + value;
// }
function reduceFunction(total, value, index, array) {
  return total + value;
}
