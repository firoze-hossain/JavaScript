//findIndex() method returns the index of first array element that passes a test function
const numbers = [2, 15, 25, 14, 87];
let numberOver18 = numbers.findIndex(findIndexFunction);
console.log("Number over 18: " + numberOver18);

function findIndexFunction(value) {
  return value > 18;
}

function findIndexFunction(value, index, array) {
  return value > 18;
}
