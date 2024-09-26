const array = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
  ];
  
  // ใช้ map() เพื่อดึงชื่อผลไม้
  const result = array.map(item => item.name);
  
  console.log(result); // ผลลัพธ์: ["apple", "banana", "watermelon"]
  