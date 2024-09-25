let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  
  function multiplyNumeric(obj, num) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= num; // คูณเฉพาะค่าใน object ที่เป็น number
      }
    }
  }
  
  // เรียกใช้ฟังก์ชัน
  multiplyNumeric(menu, 3);
  
  console.log(menu);
  