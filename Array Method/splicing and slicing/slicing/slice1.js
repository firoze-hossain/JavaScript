//slice() method does not remove any element from the source array
//creates new array
//this example sliced out elemnets from 2 index
const bikes = ["Yamaha", "Sujuki", "Bajaj", "MBW", "Royal Enfield"];
console.log("Before slicing: " + bikes);
let sliceElements = bikes.slice(2);
console.log("Sliced Elements: " + sliceElements);
