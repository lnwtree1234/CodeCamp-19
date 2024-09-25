// Class: Calculator
class Calculator {
    constructor(initialValue = 0) {
        this.value = initialValue; // กำหนดค่าเริ่มต้นให้กับ value
    }

    // Method สำหรับการบวก
    add(number) {
        this.value += number; // รวมค่าที่รับเข้ากับ value
    }

    // Method สำหรับการลบ
    subtract(number) {
        this.value -= number; // หักค่าที่รับเข้ากับ value
    }

    // Method สำหรับการคูณ
    multiply(number) {
        this.value *= number; // คูณค่าที่รับเข้ากับ value
    }

    // Method สำหรับการหาร
    divide(number) {
        if (number !== 0) {
            this.value /= number; // หารค่าที่รับเข้ากับ value
        } else {
            alert("Cannot divide by zero!"); // แสดงข้อความเมื่อหารด้วยศูนย์
        }
    }

    // Method สำหรับแสดงค่า value
    show() {
        console.log(`Current Value: ${this.value}`); // แสดงค่า value
    }
}

// การใช้งาน Class Calculator
let calculator = new Calculator(10); // สร้าง instance ของ Calculator โดยเริ่มต้นที่ 10

// ตัวอย่างการใช้งาน
// calculator.add(5); // เพิ่ม 5
// calculator.subtract(2); // หัก 2
// calculator.multiply(3); // คูณ 3
// calculator.divide(4); // หารด้วย 4
// calculator.show(); // แสดงค่า value
