const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  
  // ใช้ filter() เพื่อเลือกผู้ที่เกิดในเดือน 6
  const result = array.filter(person => {
    const month = new Date(person.birth).getMonth(); // getMonth() จะคืนค่าเดือนตั้งแต่ 0 ถึง 11
    return month === 5; // เดือน 6 คือ index 5
  });
  
  console.log(result);
  /*
  ผลลัพธ์: 
  [
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Joe', birth: '2002-06-13' }
  ]
  */
  