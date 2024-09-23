// เก็บค่า design tokens ไว้ในตัวแปร
const designTokens = {
    'color-primary-500': '#3498db',
    'color-secondary-500': '#2ecc71',
    'text-color': '#333333',
    'font-base': '16px',
    'font-weight-light': '300',
    'font-weight-regular': '400',
    'font-weight-bold': '700',
    'spacing-small': '8px',
    'spacing-medium': '16px',
    'spacing-large': '24px',
    'border-radius-small': '4px',
    'border-radius-medium': '8px',
    'border-radius-large': '12px'
};

// รับชื่อ design token จากผู้ใช้
let tokenName = prompt("Enter the design token name:");

// ตรวจสอบว่าชื่อ token ที่กรอกมีอยู่ใน designTokens หรือไม่
if (designTokens[tokenName]) {
    alert(`The value for ${tokenName} is: ${designTokens[tokenName]}`);
} else {
    alert(`Design token ${tokenName} not found.`);
}
