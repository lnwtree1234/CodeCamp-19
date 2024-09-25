const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
};

// 1. ใช้ for...in loop เพื่อสร้างอ็อบเจ็กต์ clone
const clonedNotebook1 = {};
for (let key in notebook) {
    clonedNotebook1[key] = notebook[key]; // คัดลอก key-value จาก notebook
}

// 2. ใช้ Object.assign เพื่อสร้างอ็อบเจ็กต์ clone
const clonedNotebook2 = Object.assign({}, notebook);

// แสดงผลอ็อบเจ็กต์ที่ถูก clone
console.log(clonedNotebook1);
console.log(clonedNotebook2);