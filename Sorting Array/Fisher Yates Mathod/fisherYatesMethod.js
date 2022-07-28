//Fisher Yates method
const numbers = [5, 9, 12, 25, 87, 2, 6, 41, 1, 96];
console.log("Numbers are: " + numbers);

function myFunction() {
  for (let i = numbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = k;
  }
  console.log("Random Number are: " + numbers);
}
myFunction();
