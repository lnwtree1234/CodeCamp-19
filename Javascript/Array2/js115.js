const array1 = [1, 2, 30, 400];
const result1 = array1.map(num => num * 2);

console.log(result1); 
// ผลลัพธ์: [2, 4, 60, 800]

const array2 = [1, 2, 3, 4];
const result2 = array2.map(num => String(num));

console.log(result2); 
// ผลลัพธ์: ["1", "2", "3", "4"]

const array3 = [1, '1', 2, {}];
const result3 = array3.map(item => typeof item);

console.log(result3); 
// ผลลัพธ์: ["number", "string", "number", "object"]
