function getAverageAge(arr) {
    // ใช้ reduce เพื่อหาผลรวมของอายุ
    const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
    // คำนวณอายุเฉลี่ยและใช้ toFixed(2) เพื่อให้มี 2 ตำแหน่งทศนิยม
    return (totalAge / arr.length).toFixed(2);
  }
  
  let john = { name: 'John', age: 27 };
  let jo = { name: 'Jo', age: 21 };
  let jin = { name: 'Jin', age: 25 };
  
  let arr = [john, jo, jin];
  
  console.log(getAverageAge(arr)); // ผลลัพธ์: 24.33
  