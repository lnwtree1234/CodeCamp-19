// <!-- Thodsawas Ubol CodeCamp#19 -->

let a = undefined;
d = Boolean(a);
console.log(d);
// false เพราะ undefined ถือว่าเป็นค่า false

let b = ' ';
e = Boolean(b);
console.log(e);
// true เพราะ string ที่ไม่ใช่ค่าว่างถือเป็น true ใน JavaScript

let c = !b;
f = Boolean(c);
console.log(f);
// c มีค่าเป็น false เนื่องจาก !b นั้นคือการแปลงค่า b ซึ่งเป็น true ให้กลับด้าน (จาก true เป็น false)