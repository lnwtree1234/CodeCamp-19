const filterOutOdds = (...numbers) => {
    return numbers.filter(num => num % 2 === 0);
};

// ตัวอย่างการใช้งาน
console.log(filterOutOdds(1, 2, 3, 4, 5)); // ผลลัพธ์: [2, 4]
console.log(filterOutOdds(10, 21, 32, 43, 54)); // ผลลัพธ์: [10, 32, 54]
console.log(filterOutOdds()); // ผลลัพธ์: [] (กรณีไม่มีพารามิเตอร์)
