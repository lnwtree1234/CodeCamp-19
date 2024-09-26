function modifyArray(array1) {
    // สร้างสำเนาของ array1 โดยใช้ Spread operator
    const newArray = [...array1];

    // ตรวจสอบว่า index 3 มีอยู่ใน array หรือไม่
    if (newArray.length >= 3) {
        // เปลี่ยนค่าที่ index 3 ให้เป็นค่าปัจจุบันยกกำลัง 2
        newArray[3] = newArray[3] ** 2;
    }

    // คืนค่า newArray ที่มีการเปลี่ยนแปลง
    return newArray;
}

// ทดสอบฟังก์ชัน
const array1 = [1, 2, 3, 4, 5];
const result = modifyArray(array1);

console.log(result); // [1, 2, 3, 16, 5]
console.log(array1); // [1, 2, 3, 4, 5] (array1 ไม่เปลี่ยนแปลง)
