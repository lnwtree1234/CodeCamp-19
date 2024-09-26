const array1 = ['apple', 'banana', 'orange'];
const result1 = array1.map(fruit => fruit.toUpperCase());

console.log(result1); 
// ผลลัพธ์: ["APPLE", "BANANA", "ORANGE"]

const array2 = [1, 3, 4, 5, 6, 7, 8];
const result2 = array2.map(num => (num % 2 === 0 ? "even" : "odd"));

console.log(result2); 
// ผลลัพธ์: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array3 = [1, -3, 2, 8, -4, 5];
const result3 = array3.map(num => Math.abs(num));

console.log(result3); 
// ผลลัพธ์: [1, 3, 2, 8, 4, 5]
