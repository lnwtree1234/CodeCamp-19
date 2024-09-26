const array = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
];

// ฟังก์ชันเพื่อเปลี่ยนรูปแบบวันที่
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
};

// ใช้ map() เพื่อสร้าง array ใหม่ในรูปแบบ HTML
const result = array.map(item =>
    `<tr><td>${item.name}</td><td>${formatDate(item.birth)}</td></tr>`
);

console.log(result);
/*
ผลลัพธ์: 
[
  "<tr><td>apple</td><td>01 Jan 2000</td></tr>",
  "<tr><td>banana</td><td>10 Oct 1990</td></tr>",
  "<tr><td>watermelon</td><td>30 Dec 1985</td></tr>"
]
*/
