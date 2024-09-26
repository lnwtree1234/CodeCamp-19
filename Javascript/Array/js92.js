const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// หา index ของ 'a' ใน alphabets
const indices = [];
alphabets.forEach((letter, index) => {
    if (letter === 'a') {
        indices.push(index); // ถ้าเป็น 'a' ให้เก็บ index ลงในอาเรย์
    }
});

console.log(indices); // ผลลัพธ์: [0, 2, 4]
