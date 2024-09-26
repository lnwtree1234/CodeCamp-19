const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

// รวม nums1 และ nums2 พร้อมเพิ่มค่าตามโจทย์
const combinedArray = [5, ...nums1, -6, -1, ...nums2];

// หาผลรวมของทุก element ใน combinedArray
const sum = combinedArray.reduce((acc, num) => acc + num, 0);

console.log(combinedArray); // [5, 1, -2, 3, 4, -6, -1, 8, 3, -8, 1]
console.log(sum); // ผลรวม = 8
