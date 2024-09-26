const nums = [-3, 2, 11, -7, 4, 6];

// หาผลคูณของ elements ใน nums
const product = nums.reduce((accumulator, current) => accumulator * current, 1);

console.log(product); // ผลลัพธ์: 11088
