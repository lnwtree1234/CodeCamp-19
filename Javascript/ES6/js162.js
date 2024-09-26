function checkAge(user) {
    // ใช้ destructuring เพื่อดึงค่า firstName, lastName, และ age ออกจาก user
    const { firstName, lastName, age } = user;
  
    // ตรวจสอบอายุและแสดงผล
    if (age > 18) {
      console.log(`สวัสดี ${firstName} ${lastName}`);
    } else {
      console.log('ไม่มีสิทธิ์เข้าใช้งาน');
    }
  }
  
  // ตัวอย่างการเรียกใช้ฟังก์ชัน
  const user1 = { firstName: 'John', lastName: 'Doe', age: 20 };
  const user2 = { firstName: 'Jane', lastName: 'Smith', age: 18 };
  
  checkAge(user1); // สวัสดี John Doe
  checkAge(user2); // ไม่มีสิทธิ์เข้าใช้งาน
  