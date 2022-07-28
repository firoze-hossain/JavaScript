//compare function is used for alternative sorting
const numbers = [9, 8, 30, 70, 1, 7, 25];
console.log("Numbers: " + numbers);
//alphabetically sorting
numbers.sort();
console.log("Alphabetically sorting: " + numbers);
numbers.sort(function (a, b) {
  return a - b;
});
console.log("Numerically sorting: " + numbers);
