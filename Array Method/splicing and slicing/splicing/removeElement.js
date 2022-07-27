//using splice() we can remove elements withour leaving hole
const fruits = ["Mango", "Ornage", "Apple", "Lemon"];
console.log("All fruits: " + fruits);
let removedFruits = fruits.splice(3, 1);
console.log("Removed fruit: " + removedFruits);
console.log("After removing fruits: " + fruits);
