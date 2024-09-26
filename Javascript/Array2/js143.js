const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];
  
  // ใช้ reduce เพื่อสร้าง object ใหม่
  const result = products.reduce((acc, product) => {
    acc[product.id] = { name: product.name };
    return acc;
  }, {});
  
  console.log(result);
  // ผลลัพธ์: { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } }
  