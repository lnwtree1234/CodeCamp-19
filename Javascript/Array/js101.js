function first(arr, n) {
    // ถ้า n เป็น undefined หรือ 1 ให้คืนค่า element ตัวแรก
    if (n === undefined || n === 1) {
        return arr[0]; // คืนค่า element ตัวแรกของ arr
    }
    // ถ้า n มากกว่า 1 ให้คืนค่าเป็น array ที่มี element ของ arr n ตัวแรก
    else if (n > 1) {
        return arr.slice(0, n); // ใช้ slice() เพื่อคืนค่า n ตัวแรก
    }
    // ถ้า n น้อยกว่าหรือเท่ากับ 0 ให้คืนค่าเป็น array ว่าง
    return [];
}

// ทดสอบฟังก์ชัน
console.log(first([7, 9, 0, -2])); // ผลลัพธ์: 7
console.log(first([], 3)); // ผลลัพธ์: []
console.log(first([7, 9, 0, -2], 3)); // ผลลัพธ์: [7, 9, 0]
