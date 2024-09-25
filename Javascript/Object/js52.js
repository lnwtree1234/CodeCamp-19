function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  // ทดสอบฟังก์ชัน
  const obj1 = {};
  const obj2 = { name: "John", age: 30 };
  
  console.log(isEmpty(obj1)); // true (ว่าง)
  console.log(isEmpty(obj2)); // false (ไม่ว่าง)
  