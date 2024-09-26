// Lab 16 ES6: result6
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// answer 'Your name is Alejandro and you like purple'
// why? ในฟังก์ชัน getUserData มีการ destructure object ที่ส่งเข้าไปโดยดึงค่า firstName และ favoriteColor ออกมา

getUserData({ firstName: 'Melissa' }); // **
// answer 'Your name is Melissa and you like green'
// why? ในกรณีนี้ firstName จะมีค่าเป็น 'Melissa' แต่ favoriteColor จะไม่มีการส่งค่าเข้ามา แต่ใช้ default parameter ค่าเริ่มต้นคือ 'green'

getUserData({}); // ***
// answer 'Your name is undefined and you like green'
// why? คำอธิบาย: เนื่องจากไม่มีค่าใดๆ ถูกส่งเข้ามาเลย firstName จะมีค่าเป็น undefined favoriteColor จะใช้ค่า default เป็น 'green'

