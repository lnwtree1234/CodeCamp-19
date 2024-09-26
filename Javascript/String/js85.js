function truncate(str, length) {
    if (str.length <= length) {
        return str;  // ถ้าความยาวข้อความสั้นกว่าหรือเท่ากับที่กำหนด คืนค่าข้อความเดิม
    }
    return str.slice(0, length - 1) + '...';  // ตัดข้อความและต่อท้ายด้วย ...
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // ผลลัพธ์: "What I'd like to te..."
console.log(truncate("Hi everyone!", 20));                             // ผลลัพธ์: "Hi everyone!"
console.log(truncate("Hello World!", 5));                              // ผลลัพธ์: "Hell..."
console.log(truncate("Short text", 15));                              // ผลลัพธ์: "Short text"
