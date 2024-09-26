// Lab 15 ES6: result5
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // *
// answer { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

/*
1. ตัวแปร planetFacts ถูกกำหนดเป็น object ที่มี key-value ดังนี้:

planetFacts.numPlanets = 8
planetFacts.yearNeptuneDiscovered = 1846
planetFacts.yearMarsDiscovered = 1659

2. Destructuring และ Rest Syntax:

let { numPlanets, ...discoveryYears } = planetFacts; จะทำการดึงค่า numPlanets ออกจาก object planetFacts และเก็บค่าที่เหลืออยู่ในตัวแปร discoveryYears
โดยใช้ ...discoveryYears จะเก็บค่า key-value ที่เหลือทั้งหมดจาก planetFacts (นอกจาก numPlanets) ลงใน object discoveryYears
ดังนั้น:
numPlanets จะถูกเก็บค่าเป็น 8 
discoveryYears จะเก็บเป็น object ที่มีข้อมูลดังนี้:
{
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
}
*/