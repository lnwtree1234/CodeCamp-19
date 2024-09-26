const array1 = [100, 200.25, 300.84, 400.3];
const result1 = array1.map(num => num.toFixed(2));

console.log(result1); 
// ผลลัพธ์: ["100.00", "200.25", "300.84", "400.30"]

const array2 = [0, 5, 10, 7, 6, 5, 0];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const result2 = array2.map(num => months[num]);

console.log(result2); 
// ผลลัพธ์: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array = [1, 16, 81, 256, 625, 1296];
const result = array.map((num, index) => index + 1);

console.log(result); 
// ผลลัพธ์: [1, 2, 3, 4, 5, 6]


