const state1 = { username: 'john', point: 100, loading: true };

// สร้างอ็อบเจ็กต์ใหม่ที่คัดลอก property จาก state1
const state2 = {
  ...state1, // คัดลอกทุก property จาก state1
  loading: false, // เปลี่ยนค่า loading
  point: 75, // เปลี่ยนค่า point
  success: true // เพิ่ม property ใหม่
};

// แสดงผลอ็อบเจ็กต์ state2
console.log(state2);
