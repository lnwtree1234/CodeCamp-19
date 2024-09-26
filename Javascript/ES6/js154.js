function cloneObject(obj) {
    // ใช้ Spread operator เพื่อทำการคัดลอก object
    return { ...obj };
}

// ทดสอบฟังก์ชัน
const originalObject = { name: 'John', age: 30, city: 'Bangkok' };
const clonedObject = cloneObject(originalObject);

console.log(clonedObject); // { name: 'John', age: 30, city: 'Bangkok' }
console.log(originalObject === clonedObject); // false (แสดงว่ามันไม่ใช่ object เดียวกัน)
