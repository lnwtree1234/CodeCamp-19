function removeRandom(arr) {
    // สุ่ม index ที่จะลบ
    const randomIndex = Math.floor(Math.random() * arr.length);
    // ใช้ slice เพื่อลบ element ที่สุ่มได้
    return arr.slice(0, randomIndex).concat(arr.slice(randomIndex + 1));
}

// ทดสอบฟังก์ชัน
const exampleArray = [1, 2, 3, 4, 5];
const newArray = removeRandom(exampleArray);

console.log(newArray);
