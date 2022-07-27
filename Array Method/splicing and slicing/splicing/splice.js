//splice() method can be used to add new items in array
const members = ["Firoze", "Rayhan", "Millat", "Imtiaze", "Abir"];
console.log("Before splicing: " + members);
members.splice(2, 0, "Anamika", "Priya");
console.log("All members after splicing: " + members);
