// ใช้ slice()
function clone(arr) {
    return arr.slice(); // ใช้ slice() เพื่อทำการคัดลอกอาเรย์
}

// ทดสอบฟังก์ชัน
const originalArray = [1, 2, 3, 4, 5];
const clonedArray = clone(originalArray);

console.log(clonedArray); // ผลลัพธ์: [1, 2, 3, 4, 5]
console.log(clonedArray === originalArray); // ผลลัพธ์: false (หมายความว่า clonedArray ไม่ได้อ้างอิงถึง originalArray)
