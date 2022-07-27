//js array elements can be deleted using delete operator,it leaves hole in array
const fruits = ["Mango", "Jackfruit", "Pineapple", "Apple", "ornage"];
console.log("Fruits list = " + fruits);
delete fruits[1];
console.log(fruits[1]);
console.log("After delete element: " + fruits);
