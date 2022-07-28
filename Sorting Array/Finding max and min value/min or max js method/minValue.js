//using native method to find lowest value in array
const arrValue = [10, -52, 0, 1, -99, 12, 14];
console.log("Values are: " + arrValue);
function findMinValue(value) {
  let len = value.length;
  let min = Infinity;
  while (len--) {
    if (value[len] < min) {
      min = value[len];
    }
  }
  return min;
}
console.log("Lowest value in array: " + findMinValue(arrValue));
