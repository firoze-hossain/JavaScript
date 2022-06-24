function notReassignFunction() {
  try {
    const cars = ["Sujiki", "Yamaha", "Maruti"];
    cars = ["BMW", "Yamaha", "Roles Royes"];
  } catch (err) {
    document.getElementById("roze").innerHTML = err;
  }
}
