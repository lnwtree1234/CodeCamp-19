const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };

// รวม Object ทั้ง 4
const permissions = Object.assign({}, permission1, permission2, permission3, permission4);

// สร้างอ็อบเจ็กต์ permission โดยให้ค่าของ key ที่ซ้ำกันเป็น true หากมีค่าเป็น true
const permission = {};

for (const key in permissions) {
  if (permissions[key] === true) {
    permission[key] = true;  // ถ้าเป็น true ให้เก็บ
  } else if (permission[key] === undefined) {
    permission[key] = false;  // ถ้าเป็น false และยังไม่มีค่าใน permission ให้เก็บ false
  }
}

// แสดงผลอ็อบเจ็กต์ permission
console.log(permission);
