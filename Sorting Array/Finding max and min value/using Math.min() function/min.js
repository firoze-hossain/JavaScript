//using Math.min.apply() to find lowest value in array
const values = [8, 99, 300, 14, 5, 45, 66];
console.log("Values are: " + values);
function minValue(value) {
  return Math.min.apply(null, value);
}
console.log("Lowest value in array is: " + minValue(values));
