function ucFirst(str) {
    if (str.length === 0) return str; // ตรวจสอบว่าสตริงไม่ว่างเปล่า
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst('hello'));           // ผลลัพธ์: 'Hello'
console.log(ucFirst('javaScript'));      // ผลลัพธ์: 'JavaScript'
console.log(ucFirst(''));                 // ผลลัพธ์: ''
console.log(ucFirst('123abc'));          // ผลลัพธ์: '123abc' (ตัวเลขไม่เปลี่ยน)
