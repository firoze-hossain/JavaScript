//Array.forEach() function is used looping through array elements
const fruits = ["Mango", "Banana", "Apple", "Orange"];
let x = "\n";
fruits.forEach(myFunction);
console.log("Fruits List: " + x);

function myFunction(value) {
  x += value + "\n";
}
