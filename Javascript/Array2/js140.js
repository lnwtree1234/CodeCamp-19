let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let nameCount = names.reduce((acc, name) => {
    // ตรวจสอบว่าชื่อนั้นมีอยู่ใน accumulator หรือไม่
    if (acc[name]) {
        // ถ้ามี ให้เพิ่มจำนวนขึ้น 1
        acc[name]++;
    } else {
        // ถ้าไม่มี ให้เริ่มนับที่ 1
        acc[name] = 1;
    }
    return acc;
}, {});

console.log(nameCount); // ผลลัพธ์: {Jack: 1, John: 3, Bill: 2, Rick: 1}
