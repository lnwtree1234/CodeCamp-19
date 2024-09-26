// Lab7 Array: Guess Result2
// ผลจากการรันคำสั่งในบรรทัด * คืออะไร

console.log([1, 2, 3].includes(2)); // *
// answer true
// why? 2 มีอยู่ในอาเรย์ [1, 2, 3]

console.log([1, 2, 3].includes(4)); // **
// answer false
// why? 4 ไม่อยู่ในอาเรย์ [1, 2, 3]

console.log([1, 2, 3].includes(3, 3)); // ***
// answer false
// why? การค้นหาจะเริ่มที่ตำแหน่ง 3 ซึ่งนอกเหนือจากขอบเขตของอาเรย์ [1, 2, 3] จึงไม่พบ 3

console.log([1, 2, 3].includes(3, -1)); // ****
// answer true
// why? -1 หมายถึงตำแหน่งสุดท้าย (3) การค้นหาเริ่มจากตำแหน่งสุดท้ายและพบค่า 3

console.log([1, 2, NaN].includes(NaN)); // *****
// answer true
// why? ใน JavaScript NaN จะถือว่าตรงกันเมื่อใช้ includes() เนื่องจากมันถูกออกแบบมาให้เปรียบเทียบได้

console.log(['1', '2', '3'].includes(3)); // ******
// answer false
// why?  อาเรย์นี้มีค่าทั้งหมดเป็นสตริง '1', '2', และ '3' ดังนั้นค่าจำนวนเต็ม 3 จึงไม่ตรงกันกับค่าในอาเรย์
