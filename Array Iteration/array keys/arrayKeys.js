//Array.keys() returns array iterator object with array keys
const fruits = ["Mango", "Apple", "Lemon", "Orange"];
const keys = fruits.keys();
let text = "";
for (let x of keys) {
  text += x + "\n";
}
console.log(text);
