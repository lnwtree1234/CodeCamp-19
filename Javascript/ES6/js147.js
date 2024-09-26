const mergeObjects = (...objects) => {
    const result = {};
  
    for (const obj of objects) {
      for (const key in obj) {
        if (!(key in result)) {
          result[key] = obj[key];
        }
      }
    }
  
    return result;
  };
  
  // ตัวอย่าง
  const obj1 = { a: 1, b: 2 };
  const obj2 = { b: 3, c: 4 };
  const obj3 = { d: 5 };
  
  const merged = mergeObjects(obj1, obj2, obj3);
  console.log(merged); // ผลลัพธ์ : { a: 1, b: 2, c: 4, d: 5 }
  