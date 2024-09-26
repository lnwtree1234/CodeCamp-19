// Lab22 Function: Fundamental3
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


function makeWorker() {
    let name = 'Pete';
    return function () {
        alert(name);
    };
}
let name = 'John';
let work = makeWorker();
work(); // *
// answer Pete
// why? เนื่องจาก work เป็นฟังก์ชันที่ได้รับการคืนค่าจาก makeWorker() และมันเข้าถึงตัวแปร name ที่อยู่ในสโคปของ makeWorker ซึ่งมีค่าเป็น 'Pete'