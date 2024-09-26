function squareArr(arr) {
    return arr.map(num => num ** 2);  // ใช้ map เพื่อยกกำลังสองแต่ละสมาชิก
}

const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr)); // ผลลัพธ์: [4, 9, 25, 49, 121]
