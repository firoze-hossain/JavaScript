//Infinity/(-Infinity) is the value that js returns when we calculate a number outside possible value

let num = 2;
let text = "";

while (num != Infinity) {
  num = num * num;
  text = text + num + "\n";
}

console.log(text);
