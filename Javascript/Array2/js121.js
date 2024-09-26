const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
  ];
  
  // ฟังก์ชันเพื่อคำนวณอายุจากวันเกิด
  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
  
    // ตรวจสอบถ้าต้องลบ 1 ปี
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };
  
  // ใช้ map() เพื่อสร้าง array ใหม่ที่มีชื่อ, วันเกิด, และอายุ
  const result = array.map(item => ({
    name: item.name,
    birth: item.birth,
    age: calculateAge(item.birth)
  }));
  
  console.log(result);
  /*
  ผลลัพธ์: 
  [
    { name: "apple", birth: "2000-01-01", age: 21 },
    { name: "banana", birth: "1990-10-01", age: 31 },
    { name: "watermelon", birth: "1985-12-01", age: 36 }
  ]
  */
  