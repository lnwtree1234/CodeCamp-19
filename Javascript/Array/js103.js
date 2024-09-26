function isArray(input) {
    return Array.isArray(input); // ใช้ Array.isArray() เพื่อตรวจสอบว่า input เป็นอาเรย์หรือไม่
}

// ทดสอบฟังก์ชัน
console.log(isArray([1, 2, 3])); // ผลลัพธ์: true
console.log(isArray('Hello')); // ผลลัพธ์: false
console.log(isArray({ a: 1 })); // ผลลัพธ์: false
console.log(isArray([])); // ผลลัพธ์: true
console.log(isArray(null)); // ผลลัพธ์: false
console.log(isArray(undefined)); // ผลลัพธ์: false
