//by defualt sort() function sorts values are strings
//for the number it produces incorrect result
//we to use compare function for to fix this
const nums = [5, 9, 2, 7, 1, 6, 3];
console.log("Before sorting: " + nums);
nums.sort(function (a, b) {
  return a - b;
});
console.log("After sorting: " + nums);
