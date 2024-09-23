// ผู้เล่นคนแรกพิมพ์เลข (ระหว่าง 1 ถึง 100) โดยซ่อนจากผู้เล่นคนที่สอง
let correctNumber = +prompt("Player 1: Enter a number between 1 and 100 (Player 2 should not see this number):");

// ตรวจสอบว่าเลขที่ผู้เล่นคนแรกใส่อยู่ในช่วง 1-100 หรือไม่
if (correctNumber < 1 || correctNumber > 100) {
  alert("The number must be between 1 and 100. Please reload the page and try again.");
} else {
  // ผู้เล่นคนที่สองทายตัวเลขจนกว่าจะถูก
  let guess;
  do {
    guess = +prompt("Player 2: Guess the number between 1 and 100:");

    if (guess > correctNumber) {
      alert("Too high! Try again.");
    } else if (guess < correctNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Correct! You guessed the number.");
    }
  } while (guess !== correctNumber);
}
