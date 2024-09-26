const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];
  
  // ใช้ reduce เพื่อกลุ่มคนตามเพศ
  const result = persons.reduce((acc, person) => {
    // ถ้ายังไม่มี key สำหรับเพศนั้นๆ ให้สร้าง array ใหม่
    if (!acc[person.sex]) {
      acc[person.sex] = [];
    }
    // เพิ่มชื่อคนลงใน array ของเพศนั้นๆ
    acc[person.sex].push(person.name);
    return acc;
  }, {});
  
  console.log(result);
  // ผลลัพธ์: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
  