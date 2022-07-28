//comapring string properties is complex for sorting array object
const cars = [
  { type: "Toyota", year: 2009 },
  { type: "Honda", year: 2011 },
  { type: "Ford", year: 2017 },
];
console.log("Before Sorting String: ");
displayCars();
console.log("\n");
console.log("After Sorting String: ");
compareString();

function compareString() {
  cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  displayCars();
}
function displayCars() {
  console.log(
    cars[0].type +
      " " +
      cars[0].year +
      "\n" +
      cars[1].type +
      " " +
      cars[1].year +
      "\n" +
      cars[2].type +
      " " +
      cars[2].year
  );
}
