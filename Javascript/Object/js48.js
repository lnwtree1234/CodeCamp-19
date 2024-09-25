// Lab2 Object: Guess Result
// บรรทัดที่มี * ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user); 
// { email: 'cc@gmail.com', isActive: false }

user = {};
console.log(user);

// เกิด TypeError เนื่องจาก user ถูกกำหนดเป็น const