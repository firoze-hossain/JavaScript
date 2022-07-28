//sorting numbers in random order
const nums = [50, 9, 36, 1, 7, 25, 2];
console.log("Before sorting: " + nums);
nums.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log("After sorting using random function: " + nums);
