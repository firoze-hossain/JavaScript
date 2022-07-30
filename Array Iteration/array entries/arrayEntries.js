//Array.entries() return array iterator object with key/value pairs
const fruits = ["Mango", "Apple", "Pineapple", "Guava", "Lemon", "Orange"];
const fr = fruits.entries();

for (let x of fr) {
  console.log(x + "\n");
}
