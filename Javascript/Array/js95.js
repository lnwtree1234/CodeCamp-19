const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];

// สร้างตัวแปร Array โดยใช้ slice() เพื่อเลือกค่าจาก index 1 ถึง 3
const selectedSports = sports.slice(1, 4); // จะได้ค่าจาก index 1 ถึง 3

console.log(selectedSports); // ผลลัพธ์: ['volleyball', 'tennis', 'basketball']
