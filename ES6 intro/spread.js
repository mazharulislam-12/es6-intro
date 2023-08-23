const max = Math.max(45, 89, 51, 23, 65, 78);
console.log(max);

const numbers = [54, 89, 23, 5,96, 23, 74, 32];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);


// use spread operator to copy
const nums = [4, 5, 9, 65, 23, 63];
const nums2 = nums;
nums2.push();
console.log(...nums);
// console.log(nums2);
nums.push(100)
console.log(nums2);
console.log(nums);
