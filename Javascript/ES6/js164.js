function topSalaries(salaries) {
    // ตรวจสอบว่ามีค่าใน salaries หรือไม่
    if (Object.keys(salaries).length === 0) {
      return null; // ถ้าเป็น empty object ให้ return null
    }
  
    let maxSalary = Math.max(...Object.values(salaries)); // หาค่า salary สูงสุด
    for (let name in salaries) {
      if (salaries[name] === maxSalary) {
        return name; // return ชื่อคนที่มี salary สูงสุด
      }
    }
  }
  
  // ตัวอย่างการใช้งาน
  let salaries1 = {
    John: 100,
    Pete: 300,
    Mary: 250
  };
  
  let salaries2 = {}; // Empty object
  
  console.log(topSalaries(salaries1)); // Pete
  console.log(topSalaries(salaries2)); // null
  