//adding element with high indexes can create undefined holes
const person = ["Md. Firoze", "Hossain", "Java Developer", 27];
person[6] = "IUBAT";
for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
