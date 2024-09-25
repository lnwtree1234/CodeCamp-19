// Lab18 Object: Guess Result3
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // *
// answer John
// user.sayHi(): เมื่อต้องการเรียกใช้ sayHi จาก object user, การใช้ this จะเรียนใช้ opject ใน method ที่เรียก ซึ่งในกรณีนี้คือ user
// this.name: ภายในฟังก์ชัน sayHi จะเข้าถึงค่าของ name ที่อยู่ใน object user ซึ่งมีค่าเป็น 'John'