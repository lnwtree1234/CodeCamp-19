// Lab5 Array: Guess Result1
// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // *
// answer 1
// เหตุผล: ฟังก์ชัน indexOf('bison') จะค้นหาคำว่า 'bison' ในอาเรย์ beasts โดยเริ่มจากตำแหน่ง 0 'ant' และจะพบ 'bison' ที่ตำแหน่ง 1

console.log(beasts.indexOf('bison', 2)); // **
// answer 4
// เหตุผล: ฟังก์ชัน indexOf('bison', 2) จะค้นหาคำว่า 'bison' ในอาเรย์ beasts โดยเริ่มจากตำแหน่ง 2 'camel' โดยเริ่มนับ 0 แล้ววนไปจนมาพบ 'bison' เมื่อนับ 4

console.log(beasts.indexOf('giraffe')); // ***
// answer -1
// เหตุผล: ฟังก์ชัน indexOf('giraffe') จะค้นหาคำว่า 'giraffe' ในอาเรย์ beasts แต่ไม่พบ จึงคืนค่า -1 เพื่อบ่งบอกว่าไม่พบสมาชิกนั้นในอาเรย์

