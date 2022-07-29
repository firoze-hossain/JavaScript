//array iterates operates on every each item of array
//forEach() method calls a function once for every array item
const numbers = [2, 8, 25, 36, 1, 74];
let txt = "";
numbers.forEach(myFunction);
console.log(txt);
// function myFunction(value) {
//   txt += value;
// }
function myFunction(value, index, array) {
  txt += value + "\n";
}
