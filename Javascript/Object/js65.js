// Lab19 Object: Guess Result4
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}

let user = makeUser();
console.log(user.ref.name); // *
// answer Joe
// เมื่อเราเรียก user.ref.name, มันจะคืนค่า 'Joe' ซึ่งเป็นค่าของ name ที่อยู่ใน global object
