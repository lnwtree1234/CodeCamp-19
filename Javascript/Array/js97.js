const person = ['John', 'Jay', 'Jim', 'Jame'];

// หาตำแหน่ง index ของ 'Jay'
const index = person.indexOf('Jay');

// ลบ 'Jay' ออก และแทนที่ด้วย 'Jack' และ 'Joe'
if (index !== -1) {
    person.splice(index, 1, 'Jack', 'Joe'); // ลบ 1 element ที่ index และเพิ่ม 'Jack' และ 'Joe'
}

console.log(person); // ผลลัพธ์: ['John', 'Jack', 'Joe', 'Jim', 'Jame']
