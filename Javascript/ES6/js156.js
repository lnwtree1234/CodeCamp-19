// Lab 12 ES6: result2
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
];

console.log(raindrops); // *
// answer Raindrops on roses

console.log(whiskers); // **
// answer whiskers on kittens

console.log(aFewOfMyFavoriteThings); // ***
// answer [ 'Bright copper kettles', 'warm woolen mittens' ]

/*
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] จะประกาศตัวแปร raindrops และ whiskers ซึ่งจะได้รับค่าจากสมาชิกแรกและที่สองของ array หลังเครื่องหมาย = ตามลำดับ
rest operator (...) จะทำหน้าที่รวบรวมค่าที่เหลือจาก array (ในกรณีนี้ค่าที่สามและสี่) ไปไว้ใน aFewOfMyFavoriteThings ซึ่งจะเป็น array ของค่าที่เหลือ
*/
