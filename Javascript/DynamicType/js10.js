// <!-- Thodsawas Ubol CodeCamp#19 -->

let a = undefined;
d = String(a);
console.log(d);
// "undefined" – เพราะว่า a เป็น undefined

let b = 2;
e = String(b);
console.log(e);
// "2" – เพราะว่า b เป็นเลข 2 ซึ่งแปลงเป็น String ได้

let c = a++;
f = String(c);
console.log(f);
// "NaN" – เพราะว่า c ได้รับค่า a++ ซึ่ง a เป็น undefined ทำให้ c เป็น NaN (Not a Number) เมื่อลองเพิ่มค่า

