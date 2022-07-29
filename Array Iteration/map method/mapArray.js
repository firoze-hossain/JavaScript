//map() creates a new array without changing the original
//multiple each elements in array
const nums1 = [3, 6, 14, 25, 10];
console.log("Before multiplication: " + nums1);
const nums2 = nums1.map(mapFunction);
console.log("array elements multiplied with 2 = " + nums2);

function mapFunction(value, index, array) {
  return value * 2;
}
