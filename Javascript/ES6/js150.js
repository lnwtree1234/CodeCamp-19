function userInfo(firstName, lastName, ...hobbies) {
    return {
        firstName: firstName,
        lastName: lastName,
        hobbies: hobbies,
        hobbyCount: hobbies.length
    };
}

// ทดสอบฟังก์ชัน
const result = userInfo('John', 'Doe', 'Reading', 'Traveling', 'Cooking');

console.log(result);
/*
ผลลัพธ์จะเป็น:
{
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Traveling', 'Cooking'],
    hobbyCount: 3
}
*/
