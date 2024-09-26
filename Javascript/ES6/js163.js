let user = {
    name: 'John',
    years: 27
  };
  
  // ใช้ destructuring พร้อมกำหนดค่า default ให้กับ isAdmin
  let { name, years: age, isAdmin = false } = user;
  
  // แสดงผลลัพธ์
  console.log(name);    // John
  console.log(age);     // 27
  console.log(isAdmin); // false (เพราะไม่มีค่าใน user)
  