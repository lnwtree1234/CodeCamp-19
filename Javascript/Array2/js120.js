const array = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
  ];
  
  // ใช้ map() เพื่อรวมชื่อและนามสกุล
  const result = array.map(item => `${item.name} ${item.surname}`);
  
  console.log(result); // ผลลัพธ์: ["apple London", "banana Bangkok", "watermelon Singapore"]
  