const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  function updateTask(id, newName) {
    // หา element ที่มี id ตรงกับ id ที่กำหนด
    const task = tasks.find(task => task.id === id);
  
    // ถ้าเจอ element ที่มี id ตรงกัน
    if (task) {
      // ลบ property ชื่อ name
      delete task.name;
      
      // เพิ่ม property ชื่อ newName พร้อมกับค่าใหม่
      task.newName = newName;
    }
  }
  
  // เรียกใช้ฟังก์ชัน
  updateTask(2, 'Travelling');
  
  console.log(tasks);
  