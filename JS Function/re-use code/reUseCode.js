//re use code using function
//using different arguments produce different result
function convertToCelsius(f) {
  return (5 / 9) * (f - 32);
}
console.log("Temperature is celsius: " + convertToCelsius(50));
