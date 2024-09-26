let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  // ใช้ Object.values() เพื่อคำนวณผลรวม
  let totalSalariesFromValues = Object.values(salaries).reduce((accumulator, current) => accumulator + current, 0);
  console.log(totalSalariesFromValues); // ผลลัพธ์: 390
  
  // ใช้ Object.keys() เพื่อคำนวณผลรวม
let totalSalariesFromKeys = Object.keys(salaries).reduce((accumulator, key) => accumulator + salaries[key], 0);
console.log(totalSalariesFromKeys); // ผลลัพธ์: 390

// ใช้ Object.entries() เพื่อคำนวณผลรวม
let totalSalariesFromEntries = Object.entries(salaries).reduce((accumulator, [key, value]) => accumulator + value, 0);
console.log(totalSalariesFromEntries); // ผลลัพธ์: 390
