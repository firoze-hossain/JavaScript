//reduce() method can accept an initial value
const nums = [23, 10, 15, 12, 5];
let sum = nums.reduce(reduceFunction, 100);
console.log("The result = " + sum);

function reduceFunction(total, value) {
  return total + value;
}
