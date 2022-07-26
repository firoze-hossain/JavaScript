//new keyword can produce unexpected result
const num = new Array(20, 80, 10);
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
