let str = 'I live in Thailand';

let charCount = str.toLowerCase().split('').reduce((acc, char) => {
    // ตรวจสอบว่าตัวอักษรเป็นตัวอักษร
    if (char >= 'a' && char <= 'z') {
        // ถ้าตัวอักษรมีอยู่ใน accumulator ให้เพิ่มจำนวนขึ้น 1
        acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
}, {});

console.log(charCount); // ผลลัพธ์: {i: 4, l: 2, v: 1, e: 1, n: 2, t: 1, h: 1, a: 2, d: 1}
