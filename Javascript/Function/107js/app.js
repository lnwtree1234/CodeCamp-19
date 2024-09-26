function showDialog(question, yes, no) {
    // แสดงกล่องโต้ตอบ
    document.getElementById('question').innerText = question;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('dialog').style.display = 'block';

    // กำหนดให้ปุ่ม YES ทำงาน
    document.getElementById('yesBtn').onclick = function () {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('dialog').style.display = 'none';
        yes();
    };

    // กำหนดให้ปุ่ม NO ทำงาน
    document.getElementById('noBtn').onclick = function () {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('dialog').style.display = 'none';
        no();
    };
}

function checkPermission(role, onAdmin, onNonAdmin) {
    if (role === "ADMIN") {
        onAdmin();
    } else {
        onNonAdmin();
    }
}

// ฟังก์ชันที่ทำงานเมื่อ role เป็น "ADMIN"
function accessGranted() {
    alert("ACCESS GRANTED");
}

// ฟังก์ชันที่ทำงานเมื่อ role ไม่ใช่ "ADMIN"
function accessDenied() {
    alert("ACCESS DENIED");
}

// ใช้ showDialog เพื่อถามผู้ใช้ว่าตนเป็น ADMIN หรือไม่
showDialog('Are you an ADMIN?', function () {
    checkPermission("ADMIN", accessGranted, accessDenied);
}, function () {
    checkPermission("USER", accessGranted, accessDenied);
});