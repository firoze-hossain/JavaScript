//finding max value in array
//descending order
const nums = [52, 12, 99, 33, 1, 7, 24];
console.log("Numbers: " + nums);
nums.sort(function (a, b) {
  return b - a;
});
console.log("Sorted in descendin: " + nums);
console.log("Highest value: " + nums[0]);
