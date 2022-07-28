//there is no-built in function for finding max and min value in array
//after sorting by using of of index we caan get highest and lowest value
//ascending sort
const nums = [5, 9, 10, 3, 78, 56, 25, 1, 6];
console.log("Before sorting: " + nums);
nums.sort(function (a, b) {
  return a - b;
});
console.log("Sorted array: " + nums);
console.log("Lowest Value: " + nums[0]);
