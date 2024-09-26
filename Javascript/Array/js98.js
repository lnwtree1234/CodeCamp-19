const cars = ['volvo', 'toyota', 'honda', 'ford'];

// หาตำแหน่งของ 'honda'
const index = cars.indexOf('honda');

// เพิ่ม 'mazda', 'bmw', และ 'nissan' หลัง 'honda'
if (index !== -1) {
    cars.splice(index + 1, 0, 'mazda', 'bmw', 'nissan'); // เพิ่มที่ index หลัง 'honda'
}

console.log(cars); // ผลลัพธ์: ['volvo', 'toyota', 'honda', 'mazda', 'bmw', 'nissan', 'ford']
