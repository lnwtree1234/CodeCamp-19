const multiply = (...numbers) => {
    return numbers.reduce((acc, num) => acc * num, 1);
  };
  
  // ตัวอย่างการใช้งาน
  console.log(multiply(2, 3, 4)); // ผลลัพธ์: 24
  console.log(multiply(1, 5, 10)); // ผลลัพธ์: 50
  console.log(multiply()); // ผลลัพธ์: 1 (กรณีไม่มีพารามิเตอร์)
  console.log(multiply(6, 7,8,5,6,3,2,4,1,7,5,3,2)); // ผลลัพธ์: 50803200
  