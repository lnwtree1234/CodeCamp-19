let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// ใช้ Set เพื่อสร้าง array ที่ไม่มีค่า duplicate
let uniqueAlphabets = [...new Set(alphabets)];

console.log(uniqueAlphabets); // ผลลัพธ์: ['a', 'b', 'c', 'e', 'd']
