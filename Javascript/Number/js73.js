function calculatePoints(purchaseAmount) {
    // ทุกๆ 100 บาท ได้ 1 แต้ม
    let points = Math.floor(purchaseAmount / 100); //math.floor เพื่อปัดเศษลง
    return points;
}

let points = calculatePoints(550);  // ยอดซื้อ 550 บาท
console.log(points);  // ผลลัพธ์: 5 แต้ม
