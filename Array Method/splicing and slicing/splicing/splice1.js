//in splice(x,y) y parameter defines how many elements should be removed
const fruits = ["Mango", "Jackfruit", "Pineapple", "Guava"];
console.log("Before splice: " + fruits);
let removedFruits = fruits.splice(2, 2, "Apple", "Orange");
console.log("The removed fruits= " + removedFruits);
console.log("After splice: " + fruits);
