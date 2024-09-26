function cloneArray(arr) {
    // ใช้ Spread operator เพื่อทำการคัดลอก array
    return [...arr];
}

// ทดสอบฟังก์ชัน
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = cloneArray(originalArray);

console.log(clonedArray); // [1, 2, 3, 4, 5]
console.log(originalArray === clonedArray); // false (แสดงว่ามันไม่ใช่ object เดียวกัน)
