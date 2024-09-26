const obj = { prop: 5, prop2: 10 };

// ใช้ Object destructuring เพื่อดึงค่า
const { prop: a, prop2: b } = obj;

console.log(a); // 5
console.log(b); // 10
