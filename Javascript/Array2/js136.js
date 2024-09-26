const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
  ];
  
  function getWeightedAverage(scores) {
    // คำนวณผลรวมของคะแนนที่ถ่วงน้ำหนัก
    const totalWeightedScore = scores.reduce((accumulator, { score, weight }) => {
      return accumulator + score * weight;
    }, 0);
    
    // คำนวณผลรวมน้ำหนัก
    const totalWeight = scores.reduce((accumulator, { weight }) => {
      return accumulator + weight;
    }, 0);
    
    // หาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก และปัดเศษเป็นจำนวนเต็ม
    return Math.round(totalWeightedScore / totalWeight);
  }
  
  console.log(getWeightedAverage(scores)); // ผลลัพธ์: 89
  