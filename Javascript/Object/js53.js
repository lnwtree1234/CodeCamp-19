let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  function calSalary(obj) {
    let total = 0;
  
    // ใช้ Object.values() เพื่อดึงค่าออกมาและรวมกัน
    for (let salary of Object.values(obj)) {
      total += salary;
    }
  
    return total;
  }
  
  // ทดสอบฟังก์ชัน
  console.log(calSalary(salaries)); // ผลลัพธ์: 390
  
  // ทดสอบกรณี object ว่าง
  let emptySalaries = {};
  console.log(calSalary(emptySalaries)); // ผลลัพธ์: 0
  