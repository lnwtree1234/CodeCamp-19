const arr = [-3, 2, 0, -7, 4, 6];

// เรียงข้อมูลตามค่า element ยกกำลัง 2 จากน้อยไปหามาก
const sortedArr = arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));

console.log(sortedArr); // ผลลัพธ์: [0, 2, -3, 4, 6, -7]
