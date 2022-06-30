//If the separator is omitted, the returned array will contain the whole string in index [0].
let text = "Hello";
const myArray = text.split("");

text = "";
for (let i = 0; i < myArray.length; i++) {
  text += myArray[i]+"\n";
}
console.log(text);
