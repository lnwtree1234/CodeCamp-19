const arr = [11, 17, 23, 13, 7, 19];

// เรียงข้อมูลจากมากไปหาน้อย
const sortedArr = arr.sort((a, b) => b - a);

console.log(sortedArr); // ผลลัพธ์: [23, 19, 17, 13, 11, 7]
