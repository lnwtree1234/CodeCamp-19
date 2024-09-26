let str = '31 45 12 67 34 86 23 37 19 41';

// แยกสตริงเป็น array ของตัวเลข
let numbers = str.split(' ').map(Number);

// กรองเลขที่มีค่าน้อยกว่า 40
let filteredNumbers = numbers.filter(num => num < 40);

// หาผลรวม
let sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);

console.log("ผลรวมของเลขที่มีค่าน้อยกว่า 40:", sum); // ผลลัพธ์: 31 + 12 + 34 + 23 + 37 + 19 = 156
