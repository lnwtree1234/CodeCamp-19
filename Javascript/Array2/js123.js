const array1 = [9, 17, 23, 5];

// ใช้ filter() เพื่อเลือกค่าที่มากกว่า 10
const result1 = array1.filter(num => num > 10);

console.log(result1); // ผลลัพธ์: [17, 23]

const array2 = [1, 2, 3, 4];

// ใช้ filter() เพื่อเลือกเลขคี่
const result2 = array2.filter(num => num % 2 !== 0);

console.log(result2); // ผลลัพธ์: [1, 3]

const array3 = [1, '1', 2, {}];

// ใช้ filter() เพื่อเลือกค่าที่ประเภทข้อมูลเป็น Number
const result3 = array3.filter(item => typeof item === 'number');

console.log(result3); // ผลลัพธ์: [1, 2]
