// Lab 14 ES6: result4
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // *
// answer 8

console.log(yearNeptuneDiscovered); // **
// answer 1846

/*
1. ตัวแปร facts ถูกกำหนดเป็น object ที่มี key-value ดังนี้:

facts.numPlanets = 8
facts.yearNeptuneDiscovered = 1846

2.Destructuring: 

let { numPlanets, yearNeptuneDiscovered } = facts; จะทำการดึงค่า numPlanets และ yearNeptuneDiscovered ออกจาก object facts และสร้างตัวแปรใหม่ numPlanets และ yearNeptuneDiscovered ที่มีค่าตามที่ดึงมาจาก object ดังกล่าว
ดังนั้น:
numPlanets จะมีค่าเป็น 8
yearNeptuneDiscovered จะมีค่าเป็น 1846
*/