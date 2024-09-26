const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];

// ใช้ filter() เพื่อเลือกค่าที่มีความยาวมากกว่า 6 ตัวอักษร
const result1 = array1.filter(fruit => fruit.length > 6);

console.log(result1); // ผลลัพธ์: ['pineapple', 'watermelon']

const array2 = [1, -3, 2, 8, -4, 5];

// ใช้ filter() เพื่อเลือกค่าที่เป็นเลขบวก
const result2 = array2.filter(num => num > 0);

console.log(result2); // ผลลัพธ์: [1, 2, 8, 5]

const array3 = [1, 3, 4, 5, 6, 7, 8];

// ใช้ filter() เพื่อเลือกค่าที่หาร 3 ลงตัว
const result3 = array3.filter(num => num % 3 === 0);

console.log(result3); // ผลลัพธ์: [3, 6]
