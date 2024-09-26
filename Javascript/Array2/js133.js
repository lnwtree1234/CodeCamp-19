function copySorted(arr) {
    // สร้าง copy ของ arr และเรียงข้อมูล
    return arr.slice().sort();
  }
  
  let arr = ['React', 'Vue', 'Angular'];
  let sorted = copySorted(arr);
  
  console.log(sorted); // ผลลัพธ์: [ 'Angular', 'React', 'Vue' ]
  console.log(arr);    // ผลลัพธ์: [ 'React', 'Vue', 'Angular' ] (ไม่มีการเปลี่ยนแปลง)
  