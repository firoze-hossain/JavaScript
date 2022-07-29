//reduceRight() method runs a function on each element to produce a single value
const numbers = [2, 3, 10, 14, 25, 11];
let sum = numbers.reduceRight(reduceRightFunction);
console.log("The result = " + sum);
function reduceRightFunction(total, value) {
  return total + value;
}
function reduceRightFunction(total, value, index, array) {
  return total + value;
}
