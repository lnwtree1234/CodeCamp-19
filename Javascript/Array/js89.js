const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
];

const summary = sales.map(item => {
    const netPrice = item.discount ? item.price * (1 - item.discount) : item.price;
    return { netPrice }; // คืนค่าเป็นอ็อบเจ็กต์ที่มี netPrice
});

console.log(summary);

