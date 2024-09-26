// Lab 13 ES6: result3
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // *
// answer [10,30,20]

/*
1. ตัวแปร numbers ถูกกำหนดเป็น array ที่มีค่า [10, 20, 30] ซึ่ง:

numbers[0] = 10
numbers[1] = 20
numbers[2] = 30

2. มีการ Swap หรือแทนที่ค่าของ numbers[1] และ numbers[2]: 

[numbers[1], numbers[2]] = [numbers[2], numbers[1]]; หมายถึงสลับค่าในตำแหน่งที่ 1 และ 2 ของ array numbers ดังนั้น:
numbers[1] (ซึ่งเป็น 20) จะถูกเปลี่ยนเป็น numbers[2] (ซึ่งเป็น 30)
numbers[2] (ซึ่งเป็น 30) จะถูกเปลี่ยนเป็น numbers[1] (ซึ่งเป็น 20)
*/