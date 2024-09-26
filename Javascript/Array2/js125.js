const array1 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];

// ใช้ filter() เพื่อเลือกค่าที่ขึ้นต้นด้วยตัว E
const result1 = array1.filter(animal => animal.startsWith('E'));

console.log(result1); 
// ผลลัพธ์: ['Elephant', 'Eagle']

const array2 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];

// ใช้ filter() เพื่อเลือกค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const result2 = array2.filter(fruit => fruit === fruit.toUpperCase());

console.log(result2); 
// ผลลัพธ์: ['APPLE', 'PEACH']

const array3 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];

// ใช้ filter() เพื่อเลือกค่าที่มีคำว่า 'buri' โดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const result3 = array3.filter(location => location.toLowerCase().includes('buri'));

console.log(result3); 
// ผลลัพธ์: ['Chonburi', 'Buriram', 'Saraburi']
