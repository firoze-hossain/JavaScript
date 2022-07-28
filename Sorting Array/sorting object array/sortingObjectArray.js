//sorting object array using sort() method and compare function
const cars = [
  { type: "BMW", year: 2010 },
  { type: "Merceedes", year: 2015 },
  { type: "Yamaha", year: 2013 },
];
cars.sort(function (a, b) {
  return a.year - b.year;
});
displayCars();
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
