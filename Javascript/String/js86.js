function extractCurrencyValue(string, rate) {
    // ลบสัญลักษณ์ '$' ออก และแปลงเป็นตัวเลข
    const dollarValue = parseFloat(string.replace('$', ''));
    
    // คำนวณค่าเงินบาท
    return dollarValue * rate;
}

console.log(extractCurrencyValue('$120', 30)); // ผลลัพธ์: 3600
console.log(extractCurrencyValue('$50', 32));  // ผลลัพธ์: 1600
console.log(extractCurrencyValue('$75.5', 30)); // ผลลัพธ์: 2265
