const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };
  
  const product2 = {};  // product2 เป็น object ว่าง
  
  // log province ของ product1
  console.log(product1.distributor?.address?.province); // ผลลัพธ์: 'Bangkok'
  
  // log province ของ product2 โดยใช้คำสั่งเดียวกัน
  console.log(product2.distributor?.address?.province); // ผลลัพธ์: undefined (ไม่เกิด Error)
  
//   ใช้ optional chaining (?.) เพื่อหลีกเลี่ยงการเกิด Error หาก property ที่เราเข้าถึงไม่มีอยู่ใน object นั้น