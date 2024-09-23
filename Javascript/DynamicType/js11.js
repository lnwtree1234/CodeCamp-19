// <!-- Thodsawas Ubol CodeCamp#19 -->

let a = undefined;
d = Number(a);
console.log(d);
// NaN (เพราะ undefined ไม่สามารถแปลงเป็นตัวเลขได้)

let b = null;
e = Number(b);
console.log(e);
// 0 (ตามกฎ JavaScript null เมื่อแปลงเป็นตัวเลขจะกลายเป็น 0)

let c = b + '4 2';
f = Number(c);
console.log(f)
// NaN (เพราะ "null4 2" เป็น string ที่ไม่สามารถแปลงเป็นตัวเลขได้)