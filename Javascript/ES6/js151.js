function doubleAndReturnArgs(arr, ...numbers) {
    // ใช้ map เพื่อคูณสองตัวเลขใน numbers
    const doubledNumbers = numbers.map(num => num * 2);
    // รวม array ที่มีค่าเดิมและค่าที่คูณสองเข้าเป็น array ใหม่
    return [...arr, ...doubledNumbers];
}

// ทดสอบฟังก์ชัน
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
// ผลลัพธ์ที่คาดหวัง: [1, 2, 3, 8, 8]

console.log(doubleAndReturnArgs([2], 10, 4)); 
// ผลลัพธ์ที่คาดหวัง: [2, 20, 8]
