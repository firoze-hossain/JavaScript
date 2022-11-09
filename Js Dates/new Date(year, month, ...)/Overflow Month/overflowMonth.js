//specifying a month higher than 11 will not result in an error but overflow next year
// js counts month from 0=January to 11=December
const d = new Date(2021, 14, 24, 25, 30, 45, 0);
console.log(d);