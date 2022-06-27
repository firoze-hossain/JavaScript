//outside the function local variable can not be accessed
function localFunction() {
  let carName = "Volvo";
  console.log(carName + " " + typeof carName);
}
localFunction();
console.log(typeof carName);
