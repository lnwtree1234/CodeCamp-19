const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];
  
  function deleteTask(id) {
    // หา index ของ element ที่มี id ตรงกับ id ที่ต้องการ
    const index = tasks.findIndex(task => task.id === id);
  
    // ถ้าเจอ element นั้น (index ไม่เท่ากับ -1)
    if (index !== -1) {
      tasks.splice(index, 1); // ลบ element ที่ตำแหน่งนั้นออกจาก array
    }
  }
  
  // เรียกใช้ฟังก์ชัน
  deleteTask(1);
  
  console.log(tasks);
  