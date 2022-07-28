//using home-made function to find highest value
const values = [52, 125, 41, 1, 36, 99, 87];
console.log("Values are: " + values);

function findMaxValue(value) {
  let len = value.length;
  let max = -Infinity;
  while (len--) {
    if (value[len] > max) {
      max = value[len];
    }
  }
  return max;
}
console.log("Highest value is: " + findMaxValue(values));
