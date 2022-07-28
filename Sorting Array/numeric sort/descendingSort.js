//use compare function to sort array(numeric number) in descending
const numbers = [90, 700, 50, 10, 30, 125, 40];
console.log("Before sorting: " + numbers);
numbers.sort(function (a, b) {
  return b - a;
});
console.log("Sorted numbers in descending: " + numbers);
