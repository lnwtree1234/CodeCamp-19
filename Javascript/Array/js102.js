function toCamelCase(str) {
    return str
        .split('-') // แยกคำตาม dash
        .map((word, index) => {
            // ถ้าเป็นคำแรกให้คงตัวอักษรไว้ (ตัวพิมพ์เล็ก), ถ้าไม่ใช่ให้ทำตัวพิมพ์ใหญ่
            return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(''); // รวมคำกลับเข้าด้วยกัน
}

// ทดสอบฟังก์ชัน
console.log(toCamelCase('background-color')); // ผลลัพธ์: backgroundColor
console.log(toCamelCase('font-size')); // ผลลัพธ์: fontSize
console.log(toCamelCase('border-width')); // ผลลัพธ์: borderWidth
