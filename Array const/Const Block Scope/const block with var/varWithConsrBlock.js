//array declared with  var does not have const block
var cars = ["Toyoto", "Sujuki", "Maruti"];
{
    var cars = ["BMW", "Yamaha", "Volvo"];
}
console.log(cars[0]);