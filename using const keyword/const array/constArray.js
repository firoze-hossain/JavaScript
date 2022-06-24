function constArrayFunction() {
  const cars = ["Volvo", "BMW", "Yamaha"];
  cars[0] = "Marchetis";
  cars.push("Audi");
  document.getElementById("roze").innerHTML = cars;
}
