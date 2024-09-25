// Constructor Function: Accumulator
function Accumulator(startingValue) {
    this.Value = startingValue; // กำหนดค่าเริ่มต้นให้กับ currentValue

    // Method สำหรับรับค่าจากผู้ใช้และบวกเข้ากับ currentValue
    this.read = function() {
        let temp = Number(prompt("Enter a number to add:")); // รับค่าจากผู้ใช้
        this.Value += Number(temp); // บวกค่าที่รับเข้ากับค่า Value ปัจจุบัน
    };

    // Method สำหรับแสดงค่า currentValue
    this.show = function() {
        alert(`Current Value: ${this.temp}`); // แสดงค่า currentValue
    };
}

// สร้าง object จาก Accumulator
let accumulator = new Accumulator(10); // ตัวอย่างการสร้าง object โดยเริ่มต้นที่ 10

// ตัวอย่างการใช้งาน
accumulator.read(); // รับค่าและบวกเข้ากับ currentValue
accumulator.show(); // แสดงค่า currentValue
