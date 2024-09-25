// Lab13 Object: Guess Result1
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *
// answer {name: 'Pepsi', price: 19, size: '500mL'}
// เพราะว่า product2 เป็นการชี้ไปยัง object product1 ดังนั้นเมื่อมีการเปลี่ยนแปลงค่าใน product2 จะส่งผลให้ product1 เปลี่ยนตามไปด้วย

console.log(product2); // **
// answer {name: 'Pepsi', price: 19, size: '500mL'}
// เนื่องจาก product2 เป็นการอ้างอิงไปยัง product1 ที่ได้มีการเปลี่ยนแปลงค่าไป

console.log(product1 === product2); // ***
// answer true
// เพราะว่า product1 และ product2 อ้างอิงไปยัง object เดียวกัน ซึ่งหมายความว่าทั้งสองตัวแปรนี้ชี้ไปยังที่อยู่เดียวกันในหน่วยความจำ