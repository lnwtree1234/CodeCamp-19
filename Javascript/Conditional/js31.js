let a = +prompt('a?');

// ใช้ switch case ในการตรวจสอบค่า a
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
  default:
    // ไม่ทำอะไรในกรณีที่ไม่มีเงื่อนไขตรง
    break;
}
