function checkEmptyObj(obj) {
    // ตรวจสอบว่าค่า obj เป็นอ็อบเจกต์และไม่ใช่ null
    if (typeof obj === 'object' && obj !== null) {
        // ใช้ Object.keys() เพื่อดึง keys ของ obj และตรวจสอบความยาว
        return Object.keys(obj).length === 0;
    }
    return false; // ถ้าไม่ใช่อ็อบเจกต์ก็คืนค่า false
}

// ตัวอย่างการทดสอบ
console.log(checkEmptyObj({})); // true
console.log(checkEmptyObj({ name: 'John' })); // false
console.log(checkEmptyObj(null)); // false
console.log(checkEmptyObj([])); // true (อาเรย์ถือเป็นอ็อบเจกต์ว่าง)
