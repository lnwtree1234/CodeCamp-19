// Lab 11 ES6: Guess result1
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first);  // *
// answer Maya

console.log(second); // **
// answer Marisa

console.log(third);  // ***
// answer Chi

/*
let [first, second, third] จะทำการประกาศตัวแปร first, second, และ third โดยค่าใน array ที่อยู่ด้านขวาเครื่องหมาย = จะถูกจัดสรรให้กับตัวแปรที่ประกาศไว้ในลำดับที่ตรงกัน
ดังนั้น first จะได้รับค่าแรกของ array ซึ่งคือ 'Maya', second จะได้รับค่าที่สองคือ 'Marisa', และ third จะได้รับค่าที่สามคือ 'Chi'
*/