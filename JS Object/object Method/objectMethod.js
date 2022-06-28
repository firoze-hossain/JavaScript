//object method(function()) is stored as property
const person = {
  firstName: "Md. Firoze",
  lastName: "Hossain",
  age: 28,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName() + "," + person.age);
