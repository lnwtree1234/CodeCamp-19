let guest = 'Jane';
let admin = 'Pete';

// ใช้ Array destructuring เพื่อสลับค่า
[guest, admin] = [admin, guest];

console.log(guest); // Pete
console.log(admin); // Jane
