// Lab14 Object: Guess Result2
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };

console.log(user === admin); // *
// answer false
// false เนื่องจากการเปรียบเทียบ object ใน JavaScript จะดูที่ที่อยู่ในหน่วยความจำ ไม่ใช่ค่าใน properties