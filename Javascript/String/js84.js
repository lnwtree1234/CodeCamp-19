function containsProhibitedWords(text) {
    // แปลงข้อความเป็นตัวพิมพ์เล็ก
    const lowerText = text.toLowerCase();
    
    // ตรวจสอบว่ามีคำต้องห้ามในข้อความ
    return lowerText.includes('xxx') || lowerText.includes('sex') || lowerText.includes('porn');
}

console.log(containsProhibitedWords('This is a test message with xxx.')); // ผลลัพธ์: true
console.log(containsProhibitedWords('Nothing inappropriate here.'));      // ผลลัพธ์: false
console.log(containsProhibitedWords('Watch out for pOrn content!'));     // ผลลัพธ์: true
console.log(containsProhibitedWords('sEX is a normal part of life.'));    // ผลลัพธ์: true
