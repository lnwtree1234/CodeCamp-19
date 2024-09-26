function formatNumber(num) {
    // คูณด้วย 100 เพื่อขยับทศนิยม และใช้ Math.floor เพื่อปัดเศษลง
    let truncatedNum = Math.floor(num * 100) / 100;
    
    // คืนค่าผลลัพธ์ในรูปแบบทศนิยม 2 ตำแหน่งโดยใช้ toFixed
    return truncatedNum.toFixed(2);
}

console.log(formatNumber(10));       // ผลลัพธ์: "10.00"
console.log(formatNumber(5.1));      // ผลลัพธ์: "5.10"
console.log(formatNumber(3.1289));   // ผลลัพธ์: "3.12"
