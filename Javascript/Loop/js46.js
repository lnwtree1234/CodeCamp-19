function findPrimeNumbers(start, end) {
    // ฟังก์ชันตรวจสอบว่าตัวเลขเป็นจำนวนเฉพาะหรือไม่
    function isPrime(num) {
      if (num < 2) return false; // ตัวเลขน้อยกว่า 2 ไม่ใช่จำนวนเฉพาะ
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // ถ้า num หารด้วย i ลงตัวแสดงว่าไม่ใช่จำนวนเฉพาะ
      }
      return true; // ถ้าไม่มีตัวหารที่ลงตัวแดสงว่าเป็นจำนวนเฉพาะ
    }
  
    const primeNumbers = [];
    // ลูปเพื่อตรวจสอบตัวเลขในช่วง start ถึง end
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i); // ถ้าเป็นจำนวนเฉพาะให้เพิ่มเข้าไปในลิสต์
      }
    }
  
    return primeNumbers;
  }
  
  // ทดสอบการทำงานของฟังก์ชัน
  console.log(findPrimeNumbers(10, 30)); // Output: [11, 13, 17, 19, 23, 29]
  console.log(findPrimeNumbers(1, 10));  // Output: [2, 3, 5, 7]
  console.log(findPrimeNumbers(15, 17)); // Output: [17]
  console.log(findPrimeNumbers(8, 10));  // Output: []
  